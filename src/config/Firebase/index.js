import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  ref,
  child,
  get,
  push,
  remove,
} from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOwGJ0AP3FGWbCInoMXhBbimfEARvSJNU",
  authDomain: "redux-to-do-app-213de.firebaseapp.com",
  projectId: "redux-to-do-app-213de",
  storageBucket: "redux-to-do-app-213de.appspot.com",
  messagingSenderId: "2770976191",
  appId: "1:2770976191:web:0f2d564da711c51b75f50a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  set,
  ref,
  child,
  get,
  push,
  onAuthStateChanged,
  signOut,
  remove,
};
