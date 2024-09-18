// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDBj7OGyRRN6vmIQe311FVwxFRt0fePasY",
    authDomain: "project-caixadeagua.firebaseapp.com",
    databaseURL: "https://project-caixadeagua-default-rtdb.firebaseio.com",
    projectId: "project-caixadeagua",
    storageBucket: "project-caixadeagua.appspot.com",
    messagingSenderId: "299247109609",
    appId: "1:299247109609:web:6d61dd82cf8fa834347778"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
