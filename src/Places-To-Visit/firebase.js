import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyDTF8VseayG2JUEckZX_3YoCrbgcG46O0U",
  // authDomain: "todo-list-d1eee.firebaseapp.com",
  // databaseURL: "https://todo-list-d1eee-default-rtdb.firebaseio.com",
  // projectId: "todo-list-d1eee",
  // storageBucket: "todo-list-d1eee.appspot.com",
  // messagingSenderId: "1038694320871",
  // appId: "1:1038694320871:web:b8483480e7552d6e6db042"
  apiKey: "AIzaSyD6OjImtSJFAjtU_X8DWZve2NAQuuRrBxA",
  authDomain: "first-last-try.firebaseapp.com",
  projectId: "first-last-try",
  storageBucket: "first-last-try.appspot.com",
  messagingSenderId: "675376603445",
  appId: "1:675376603445:web:3b25413e60c6a497936c7c",
  measurementId: "G-7WMG6VSMJM"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
