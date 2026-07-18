/* LearnPad – Firebase configuration
   Firebase Console → Project Settings → General → "Your apps" → SDK setup and configuration.
   Also make sure Email/Password and Google are enabled under
   Firebase Console → Authentication → Sign-in method. */
const firebaseConfig = {
  apiKey: "AIzaSyANkGDlvfLWHTLZH4Zq6v2ePaAxG9Xsb9I",
  authDomain: "mypkweb-146908.firebaseapp.com",
  databaseURL: "https://mypkweb-146908.firebaseio.com",
  projectId: "mypkweb-146908",
  storageBucket: "mypkweb-146908.firebasestorage.app",
  messagingSenderId: "58404950863",
  appId: "1:58404950863:web:d459dd6dd6ed3460722b3a"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
