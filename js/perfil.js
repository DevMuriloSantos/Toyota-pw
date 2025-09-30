import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, updateProfile, onAuthStateChanged, EmailAuthProvider, reauthenticateWithCredential } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

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
const auth = getAuth(app);

const img_avatar = document.querySelectorAll('.img_avatar')
let url_avatar;

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('nome_edit').value = user.displayName || '';
        document.getElementById('email_edit').value = user.email || '';
        document.getElementById('avatarPreview').src = user.photoURL || '';
        const avatar = document.getElementById('avatar');
        console.log(user)

        document.getElementById('btn_alteracoes').addEventListener('click', async (event) => {
            event.preventDefault();

            const nome_edit = document.getElementById('nome_edit').value;
            const senha_atual = prompt("Digite sua senha atual para confirmar as alterações:");

            if (!senha_atual) {
                alert("A senha é obrigatória para atualizar o e-mail.");
                return;
            }

            // Reautenticação
            const credential = EmailAuthProvider.credential(user.email, senha_atual);

            try {
                await reauthenticateWithCredential(user, credential);

                // Atualiza nome
                await updateProfile(user, { displayName: nome_edit, photoURL: url_avatar });

                alert('Perfil atualizado com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar perfil: ' + error.message);
            }
        });

        document.getElementById('avatarPreview').addEventListener('click', () => {
            avatar.style.display = 'flex'
        })

        document.getElementsByClassName('bi-x-circle')[0].addEventListener('click', () => {
            avatar.style.display = 'none'
        })
    }
});

img_avatar.forEach(img_avatar => {
    img_avatar.addEventListener('click', () => {
        document.getElementById('avatarPreview').src = img_avatar.src;
        url_avatar = img_avatar.src
        avatar.style.display = 'none'
    })
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