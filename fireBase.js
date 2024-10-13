const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// TODO: Replace the following with your app's Firebase project configuration.
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA0fUTu9Ejohr_HFfjIqg-ZE46seQLX4TI",
    authDomain: "dubhacks2024-76440.firebaseapp.com",
    projectId: "dubhacks2024-76440",
    storageBucket: "dubhacks2024-76440.appspot.com",
    messagingSenderId: "297304734198",
    appId: "1:297304734198:web:5dd65ebfe7c3c60f6aefd7",
    measurementId: "G-4415DTH1DG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export the initialized services
export { db, auth };