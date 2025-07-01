import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Inicialização Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfsVE0JjbFKv8rrE-H2s2L9VkbqdK9k5k",
  authDomain: "wisdom-ark-receituario.firebaseapp.com",
  databaseURL: "https://wisdom-ark-receituario-default-rtdb.firebaseio.com",
  projectId: "wisdom-ark-receituario",
  storageBucket: "wisdom-ark-receituario.appspot.com",
  messagingSenderId: "770953718410",
  appId: "1:770953718410:web:c6005403fb606a0463db73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Função de login do administrador
window.adminLogin = function () {
  const loading = document.getElementById("loadingOverlay");
  if (loading) loading.style.display = "flex";

  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const nome = email.split("@")[0];
      alert(`✅ Bem-vindo(a), ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
      window.location.href = "admin_dashboard.html";
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
};