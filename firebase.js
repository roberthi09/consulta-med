// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfsVE0JjbFKv8rrE-H2s2L9VkbqdK9k5k",
  authDomain: "wisdom-ark-receituario.firebaseapp.com",
  databaseURL: "https://wisdom-ark-receituario-default-rtdb.firebaseio.com",
  projectId: "wisdom-ark-receituario",
  storageBucket: "wisdom-ark-receituario.firebasestorage.app",
  messagingSenderId: "770953718410",
  appId: "1:770953718410:web:c6005403fb606a0463db73",
  measurementId: "G-S0L27G2KCR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth, analytics };