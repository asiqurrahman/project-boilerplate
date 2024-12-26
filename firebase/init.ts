// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import {
  connectStorageEmulator,
  FirebaseStorage,
  getStorage,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7wUku5tMXmle7le4IoMYATcTonD3xzrM",
  authDomain: "bdcard-d01c5.firebaseapp.com",
  projectId: "bdcard-d01c5",
  storageBucket: "bdcard-d01c5.firebasestorage.app",
  messagingSenderId: "988388800987",
  appId: "1:988388800987:web:09c4be551a0a162fcb4ffe",
  measurementId: "G-6XP6FLCK1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const userAuth = getAuth(app);
export const firestore = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

if (
  typeof window !== "undefined" &&
  window.location.hostname === "localhost" &&
  process.env.NODE_ENV === "development"
) {
  connectFirestoreEmulator(firestore, "localhost", 8080);
  connectAuthEmulator(userAuth, "http://localhost:9099", {
    disableWarnings: true,
  });
  // connectStorageEmulator(storage, "localhost", 9199);
}
