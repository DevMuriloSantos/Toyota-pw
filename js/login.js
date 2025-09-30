import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
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

const icon_avatar = document.getElementById('icon_avatar')


onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuário está logado
        if (user.photoURL != '') {
            icon_avatar.style.display = 'block';
            icon_avatar.src = user.photoURL;
            profile_icon_id.style.display = 'none';
            add_user.style.display = 'none';
        } else {
            add_user.style.display = 'none';
            profile_icon_id.style.display = 'block';
        }

    } else {
        // Usuario não está logado
        add_user.style.display = 'block';
        profile_icon.style.display = 'none';
    }
});


// poster login
const body_main = document.getElementById('body-main');
const poster_entrar = document.getElementById('poster_entrar');
const poster_cadastrar = document.getElementById('poster_cadastrar');
const poster_desconectar = document.getElementById('poster_desconectar');
const poster_login = document.getElementById('poster-login');
const navbar_main = document.getElementsByClassName('navbar-main')[0];
const nav = document.getElementsByTagName('nav')[0];
let permanecer_deconectado = false

// login e cadastro
const add_user = document.getElementById('add_user');
const profile_icon = document.querySelectorAll('.profile_icon');
const profile_icon_id = document.getElementById('profile_icon_id');
const profile = document.getElementById('profile');
const dropdownMenu = document.getElementById("dropdownMenu");
const login = document.getElementById('login');
const cadastro = document.getElementById('cadastro');
const senhaInput = document.querySelectorAll('.senha');
const toggleSenha = document.querySelectorAll('.toggleSenha');
const btn_close_login = document.getElementsByClassName('bi-x-circle')[1];
const logout = document.getElementById('logout');

const login_cadastrar = document.getElementsByClassName('login_cadastrar')[0];
const btn_close_cadastrar = document.getElementsByClassName('bi-x-circle')[0];

for (let i = 0; i < localStorage.length; i++) {

    if (localStorage.key(i) === 'Login') {
        permanecer_deconectado = localStorage.getItem(localStorage.key(i))

        if (permanecer_deconectado == 'false' || permanecer_deconectado == 'true') {
            poster_login.style.display = 'none';

            body_main.style.overflowY = 'scroll'
            navbar_main.classList.add('zIndex')
        }
    }
}

poster_entrar.addEventListener('click', () => {
    body_main.style.overflowY = 'hidden'
    nav.classList.remove('zIndex');
    login.style.display = 'flex';
    poster_login.style.display = 'none';
});

poster_cadastrar.addEventListener('click', () => {
    body_main.style.overflowY = 'hidden'
    nav.classList.remove('zIndex');
    cadastro.style.display = 'flex';
    poster_login.style.display = 'none';
});

poster_desconectar.addEventListener('click', () => {
    permanecer_deconectado = true
    localStorage.setItem('Login', permanecer_deconectado)

    body_main.style.overflowY = 'scroll'
    poster_login.style.display = 'none';

    navbar_main.classList.add('zIndex')
});

login_cadastrar.addEventListener('click', () => {
    body_main.style.overflowY = 'hidden'
    nav.classList.remove('zIndex');
    cadastro.style.display = 'flex';
    login.style.display = 'none';
});

add_user.addEventListener('click', () => {
    body_main.style.overflowY = 'hidden'
    nav.classList.remove('zIndex');
    login.style.display = 'flex';

    window.addEventListener("click", (e) => {
        if (e.target === login) {
            login.style.display = "none";

            body_main.style.overflowY = 'scroll'
            nav.classList.add('zIndex');
        }
    });
});

profile_icon.forEach(profile_icon => {
    profile_icon.addEventListener('click', () => {
        profile.style.display = 'block';
    })
})

document.addEventListener('mousedown', function (event) {
    if (
        profile.style.display === 'block' &&
        !profile.contains(event.target) &&
        event.target !== profile_icon
    ) {
        profile.style.display = 'none';
    }
});

toggleSenha.forEach((toggleSenha) => {
    toggleSenha.addEventListener('click', function () {

        senhaInput.forEach((senhaInput) => {
            const tipoAtual = senhaInput.getAttribute('type');

            if (tipoAtual === 'password') {
                senhaInput.setAttribute('type', 'text');
                this.classList.remove('bi-eye');
                this.classList.add('bi-eye-slash');
            } else {
                senhaInput.setAttribute('type', 'password');
                this.classList.remove('bi-eye-slash');
                this.classList.add('bi-eye');
            }
        })
    });
})

btn_close_login.addEventListener('click', () => {
    body_main.style.overflowY = 'scroll'
    nav.classList.add('zIndex');
    login.style.display = 'none';
});

btn_close_cadastrar.addEventListener('click', () => {
    body_main.style.overflowY = 'scroll'
    nav.classList.add('zIndex');
    cadastro.style.display = 'none';
});

logout.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            alert('Aguarde um momento até que você seja desconectado...');
            // Atualize a interface, se necessário
            add_user.style.display = 'block';
            profile_icon.style.display = 'none';
            // Outras ações, como fechar modais, etc.
        })
        .catch((error) => {
            alert('Erro ao sair: ' + error.message);
        });
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

            const entrar = document.getElementsByClassName('entrar')[0];
            const btn_cadastrar = document.getElementsByClassName('cadastrar')[0];

            // realizar login
            entrar.addEventListener('click', () => {
                const email_login = document.getElementById('email_login').value;
                const senha_login = document.getElementById('inp_senha').value;

                // tudo abaixo é uma promise
                signInWithEmailAndPassword(auth, email_login, senha_login).then((userCredential) => {
                    const user = userCredential.user;
                    alert('Login realizado com sucesso!')
                    console.log('success', userCredential)
                    console.log(user)

                    document.querySelectorAll('.inp-login').forEach(input => {
                        input.value = '';
                    })
                    body_main.style.overflowY = 'scroll'
                    nav.classList.add('zIndex');
                    login.style.display = 'none';

                    add_user.style.display = 'none';
                    profile_icon.style.display = 'block';

                }).catch(error => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                })
            });

            btn_cadastrar.addEventListener('click', () => {
                const nome_cadastro = document.getElementById('nome').value;
                const email_cadastro = document.getElementById('email_cadastro').value;
                const confirm_senha_cadastro = document.getElementById('confirm_senha').value;

                createUserWithEmailAndPassword(auth, email_cadastro, confirm_senha_cadastro)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, { displayName: nome_cadastro })
                            .then(() => {
                                alert('Cadastro realizado com sucesso!');
                                permanecer_deconectado = true
                                // Limpar campos, fechar modal etc.
                            })
                            .catch((error) => {
                                alert('Erro ao salvar nome: ' + error.message);
                            });
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            });

            /* window.location.href = 'index.html' */
        }, false)
    })
})()
