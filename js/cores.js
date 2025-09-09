// Seção Corolla
const corolla = document.getElementsByClassName('corolla')[0];
const corolla_cor = document.getElementById('corolla_cor')
const corolla_preco = document.getElementById('corolla_preco')
const btn_cores_corolla = document.querySelectorAll('.btn-cores-corolla');

const Cor1_Corolla = document.getElementById('cor1_corolla');
const Cor2_Corolla = document.getElementById('cor2_corolla');
const Cor3_Corolla = document.getElementById('cor3_corolla');

Cor1_Corolla.addEventListener('click', function() {
    corolla.src = 'img/corolla/Vermelho-Granada.png';
    corolla_cor.innerHTML = 'Vermelho Granada';
    corolla_preco.innerHTML = 'R$ 173.610,00';

    btn_cores_corolla.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_Corolla.style.border = '3px solid black';
})

Cor2_Corolla.addEventListener('click', function() {
    corolla.src = 'img/corolla/Preto-Eclipse.png';
    corolla_cor.innerHTML = 'Preto Eclipse';
    corolla_preco.innerHTML = 'R$ 173.610,00';

    btn_cores_corolla.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_Corolla.style.border = '3px solid black';
})

Cor3_Corolla.addEventListener('click', function() {
    corolla.src = 'img/corolla/Cinza-Celestial.png';
    corolla_cor.innerHTML = 'Cinza Celestial';
    corolla_preco.innerHTML = 'R$ 173.610,00';

    btn_cores_corolla.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_Corolla.style.border = '3px solid black';
})

// Seção Corolla Cross
const corolla_cross = document.getElementsByClassName('corolla-cross')[0];
const corolla_cross_cor = document.getElementById('corolla_cross_cor')
const corolla_cross_preco = document.getElementById('corolla_cross_preco')
const btn_cores = document.querySelectorAll('.btn-cores');

const Cor1_CorollaCross = document.getElementById('cor1_corolla-cross');
const Cor2_CorollaCross = document.getElementById('cor2_corolla-cross');
const Cor3_CorollaCross = document.getElementById('cor3_corolla-cross');

Cor1_CorollaCross.addEventListener('click', function() {
    corolla_cross.src = 'img/corolla-cross/Prata-Lua-Nova.png';
    corolla_cross_cor.innerHTML = 'Prata Lua Nova';
    corolla_cross_preco.innerHTML = 'R$ 191.010,00';

    btn_cores.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_CorollaCross.style.border = '3px solid black';
})

Cor2_CorollaCross.addEventListener('click', function() {
    corolla_cross.src = 'img/corolla-cross/Preto-Infinito.png';
    corolla_cross_cor.innerHTML = 'Preto Infinito';
    corolla_cross_preco.innerHTML = 'R$ 191.010,00';

    btn_cores.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_CorollaCross.style.border = '3px solid black';
})

Cor3_CorollaCross.addEventListener('click', function() {
    corolla_cross.src = 'img/corolla-cross/Branco-Lunar.png';
    corolla_cross_cor.innerHTML = 'Branco Lunar';
    corolla_cross_preco.innerHTML = 'R$ 191.320,00';

    btn_cores.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_CorollaCross.style.border = '3px solid black';
})

// Seção SW4
const sw4 = document.getElementsByClassName('sw4')[0];
const sw4_cor = document.getElementById('sw4_cor')
const sw4_preco = document.getElementById('sw4_preco')
const btn_cores_sw4 = document.querySelectorAll('.btn-cores-sw4');

const Cor1_SW4 = document.getElementById('cor1_sw4');
const Cor2_SW4 = document.getElementById('cor2_sw4');
const Cor3_SW4 = document.getElementById('cor3_sw4');

Cor1_SW4.addEventListener('click', function() {
    sw4.src = 'img/sw4/Cinza-Granito.png';
    sw4_cor.innerHTML = 'Cinza Granito';
    sw4_preco.innerHTML = 'R$ 469.890,00';

    btn_cores_sw4.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_SW4.style.border = '3px solid black';
})

Cor2_SW4.addEventListener('click', function() {
    sw4.src = 'img/sw4/Preto-Atitude.png';
    sw4_cor.innerHTML = 'Preto Atitude';
    sw4_preco.innerHTML = 'R$ 469.890,00';

    btn_cores_sw4.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_SW4.style.border = '3px solid black';
})

Cor3_SW4.addEventListener('click', function() {
    sw4.src = 'img/sw4/Branco-Lunar-Preto.png';
    sw4_cor.innerHTML = 'Branco Lunar/Preto';
    sw4_preco.innerHTML = 'R$ 469.890,00';

    btn_cores_sw4.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_SW4.style.border = '3px solid black';
})

// Seção RAV4
const rav4 = document.getElementsByClassName('rav4')[0];
const rav4_cor = document.getElementById('rav4_cor')
const rav4_preco = document.getElementById('rav4_preco')
const btn_cores_rav4 = document.querySelectorAll('.btn-cores-rav4');

const Cor1_RAV4 = document.getElementById('cor1_rav4');
const Cor2_RAV4 = document.getElementById('cor2_rav4');
const Cor3_RAV4 = document.getElementById('cor3_rav4');

Cor1_RAV4.addEventListener('click', function() {
    rav4.src = 'img/rav4/Azul-Topazio.png';
    rav4_cor.innerHTML = 'Azul Topázio';
    rav4_preco.innerHTML = 'R$ 349.290,00';

    btn_cores_rav4.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_RAV4.style.border = '3px solid black';
})

Cor2_RAV4.addEventListener('click', function() {
    rav4.src = 'img/rav4/Branco-Lunar.png';
    rav4_cor.innerHTML = 'Branco Lunar';
    rav4_preco.innerHTML = 'R$ 351.720,00';

    btn_cores_rav4.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_RAV4.style.border = '3px solid black';
})

Cor3_RAV4.addEventListener('click', function() {
    rav4.src = 'img/rav4/Prata-Nevoa.png';
    rav4_cor.innerHTML = 'Prata Névoa';
    rav4_preco.innerHTML = 'R$ 349.290,00';

    btn_cores_rav4.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_RAV4.style.border = '3px solid black';
})