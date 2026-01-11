// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3oh8e5fXdXF7R-z4jPIO58XrUNAi3hc",
  authDomain: "zalle-bakery.firebaseapp.com",
  projectId: "zalle-bakery",
  storageBucket: "zalle-bakery.firebasestorage.app",
  messagingSenderId: "421924306747",
  appId: "1:421924306747:web:ed1e605850ebca4958c11e",
  measurementId: "G-DHNMZNJFTM",
};

// Initialize Firebase (prevent re-initialization)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics only on client-side
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
