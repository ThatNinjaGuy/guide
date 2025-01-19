import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:
    process.env.REACT_APP_FIREBASE_DATABASE_URL ||
    process.env.FIREBASE_DATABASE_URL,
  projectId:
    process.env.REACT_APP_FIREBASE_PROJECT_ID ||
    process.env.FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
    process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ||
    process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
