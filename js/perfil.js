import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, updateEmail, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsCCDXpy23SCrCxhevYJw68dnemI79t5g",
    authDomain: "toyota-pw.firebaseapp.com",
    projectId: "toyota-pw",
    storageBucket: "toyota-pw.firebasestorage.app",
    messagingSenderId: "455946337849",
    appId: "1:455946337849:web:83a51f4f7accf70a7d57e8",
    measurementId: "G-QN74JGRDEM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const auth = getAuth();
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('nome_edit').value = user.displayName || '';
        document.getElementById('email_edit').value = user.email || '';

        // Listener do botão fora do submit!
        document.getElementById('btn_alteracoes').addEventListener('click', async (event) => {
            event.preventDefault();

            const nome_edit = document.getElementById('nome_edit').value;
            const email_edit = document.getElementById('email_edit').value;

            try {
                await updateProfile(user, { displayName: nome_edit });

                if (user.email !== email_edit) {
                    await updateEmail(user, email_edit);
                }
                alert('Perfil atualizado com sucesso!');

            } catch (error) {
                alert('Erro ao atualizar perfil: ' + error.message);
            }
        });
    }
});

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                form.classList.add('was-validated')
                return
            }

            form.classList.add('was-validated')
            event.preventDefault()
            /* window.location.href = 'index.html' */
        }, false)
    })
})()