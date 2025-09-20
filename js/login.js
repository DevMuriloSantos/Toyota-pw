const poster_desconectar = document.getElementById('poster_desconectar');
const poster_login = document.getElementById('poster-login');
const fixed_top = document.getElementsByClassName('fixed-top')[0];

poster_desconectar.addEventListener('click', () => {
    document.body.style.overflowY = 'scroll';
    poster_login.style.display = 'none';

    fixed_top.classList.add('zIndex')
});