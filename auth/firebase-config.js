/* LearnPad – Firebase configuration
   Replace the placeholder values below with your own Firebase project's config.
   Firebase Console → Project Settings → General → "Your apps" → SDK setup and configuration.
   Also make sure Email/Password and Google are enabled under
   Firebase Console → Authentication → Sign-in method. */
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyANkGDlvfLWHTLZH4Zq6v2ePaAxG9Xsb9I",
    authDomain: "mypkweb-146908.firebaseapp.com",
    databaseURL: "https://mypkweb-146908.firebaseio.com",
    projectId: "mypkweb-146908",
    storageBucket: "mypkweb-146908.firebasestorage.app",
    messagingSenderId: "58404950863",
    appId: "1:58404950863:web:d459dd6dd6ed3460722b3a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = firebaseConfig.auth();
