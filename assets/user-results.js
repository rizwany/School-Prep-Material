/* LearnPad – Test result recording (Firestore)
   Include on test pages after shared-nav.js:
     <script src="../assets/user-results.js"></script>

   Usage from a test's own scoring code, once a result is ready:
     window.LP.recordTestResult({
       topicId:    'ptsd',          // stable id, one per test folder
       testName:   'PTSD Symptom Reflection',
       score:      6.3,             // raw score in the test's own scale (for display)
       maxScore:   10,              // that scale's max
       percentage: 63,              // 0-100, normalized for cross-test comparison + leaderboards
       label:      'Moderate'       // optional human-readable result label
     });
   Resolves to null (and saves nothing) for signed-out visitors — results are
   only recorded for logged-in users.

   Firestore layout:
     users/{uid}/attempts/{attemptId}        – one doc per test attempt
     users/{uid}/topicSummaries/{topicId}    – rolling UserTopicSummary per topic
*/
(function () {
  'use strict';
  window.LP = window.LP || {};

  var FIRESTORE_SRC = 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore-compat.js';

  function ensureFirestore() {
    return (window.LP.firebaseReady || Promise.resolve()).then(function () {
      if (window.firebase && firebase.firestore) return;
      return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = FIRESTORE_SRC;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    });
  }
  window.LP.ensureFirestore = ensureFirestore;

  /* Slope of a short chronological series (oldest first) via least-squares. */
  function trendSlope(values) {
    var n = values.length;
    if (n < 2) return 0;
    var sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    for (var i = 0; i < n; i++) {
      sumX += i;
      sumY += values[i];
      sumXY += i * values[i];
      sumXX += i * i;
    }
    var denom = n * sumXX - sumX * sumX;
    if (denom === 0) return 0;
    return (n * sumXY - sumX * sumY) / denom;
  }

  window.LP.recordTestResult = function (result) {
    return ensureFirestore().then(function () {
      var user = firebase.auth().currentUser;
      if (!user) return null;

      var db = firebase.firestore();
      var uid = user.uid;
      var percentage = Math.max(0, Math.min(100, Number(result.percentage) || 0));
      var userRef = db.collection('users').doc(uid);
      var attemptRef = userRef.collection('attempts').doc();
      var summaryRef = userRef.collection('topicSummaries').doc(result.topicId);

      return db.runTransaction(function (tx) {
        return tx.get(summaryRef).then(function (snap) {
          var prev = snap.exists ? snap.data() : null;
          var attemptsCount = (prev ? prev.attemptsCount : 0) + 1;
          var bestScore = prev ? Math.max(prev.bestScore, percentage) : percentage;
          var avgScore = prev ? ((prev.avgScore * prev.attemptsCount) + percentage) / attemptsCount : percentage;
          var recentScores = (prev && prev.recentScores) ? prev.recentScores.slice() : [];
          recentScores.push(percentage);
          if (recentScores.length > 5) recentScores = recentScores.slice(recentScores.length - 5);

          tx.set(attemptRef, {
            uid: uid,
            topicId: result.topicId,
            testName: result.testName,
            score: result.score,
            maxScore: result.maxScore,
            percentage: percentage,
            label: result.label || null,
            takenAt: firebase.firestore.FieldValue.serverTimestamp()
          });

          tx.set(summaryRef, {
            uid: uid,
            displayName: user.displayName || null,
            topicId: result.topicId,
            testName: result.testName,
            attemptsCount: attemptsCount,
            bestScore: bestScore,
            avgScore: avgScore,
            latestScore: percentage,
            recentScores: recentScores,
            improvementTrend: trendSlope(recentScores),
            lastAttemptedAt: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        });
      });
    }).catch(function (err) {
      console.error('LearnPad: failed to record test result', err);
    });
  };
})();
