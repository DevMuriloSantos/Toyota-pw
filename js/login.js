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
const login = document.getElementById('login');
const cadastro = document.getElementById('cadastro');
const senhaInput = document.querySelectorAll('.senha');
const toggleSenha = document.querySelectorAll('.toggleSenha');
const btn_close_login = document.getElementsByClassName('bi-x-circle')[1];

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
            entrar.addEventListener('click', () => {
                document.querySelectorAll('.inp-login').forEach(input => {
                    input.value = '';
                })
                body_main.style.overflowY = 'scroll'
                nav.classList.add('zIndex');
                login.style.display = 'none';
            });

            /* const data = document.getElementById('validationCustom04');
            const valorData = data.value;
            console.log(valorData);
            alert('Agendamento realizado com sucesso!')
            window.location.href = 'index.html' */
        }, false)
    })
})()