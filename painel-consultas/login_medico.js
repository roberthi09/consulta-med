
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

window.medicoLogin = function () {
  const email = document.getElementById("medicoEmail").value;
  const password = document.getElementById("medicoPassword").value;

  const loading = document.getElementById("loadingOverlay");
  if (loading) loading.style.display = "flex";

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const nome = email.split("@")[0];
      alert(`✅ Bem-vindo(a), Dr(a). ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
      if (loading) loading.style.display = "none";
    });
};
