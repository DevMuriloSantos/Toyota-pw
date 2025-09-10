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

// Seção Corolla Hybrid
const corolla_hybrid = document.getElementsByClassName('corolla-hybrid')[0];
const corolla_hybrid_cor = document.getElementById('corolla_hybrid_cor')
const corolla_hybrid_preco = document.getElementById('corolla_hybrid_preco')
const btn_cores_corolla_hybrid = document.querySelectorAll('.btn-cores-corolla-hybrid');

const Cor1_CorollaHybrid = document.getElementById('cor1_corolla-hybrid');
const Cor2_CorollaHybrid = document.getElementById('cor2_corolla-hybrid');
const Cor3_CorollaHybrid = document.getElementById('cor3_corolla-hybrid');

Cor1_CorollaHybrid.addEventListener('click', function() {
    corolla_hybrid.src = 'img/corolla-hybrid/Preto-Eclipse.png';
    corolla_hybrid_cor.innerHTML = 'Preto Eclipse';
    corolla_hybrid_preco.innerHTML = 'R$ 191.020,00';

    btn_cores_corolla_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_CorollaHybrid.style.border = '3px solid black';
})

Cor2_CorollaHybrid.addEventListener('click', function() {
    corolla_hybrid.src = 'img/corolla-hybrid/Prata-Supernova.png';
    corolla_hybrid_cor.innerHTML = 'Prata Supernova';
    corolla_hybrid_preco.innerHTML = 'R$ 191.020,00';

    btn_cores_corolla_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_CorollaHybrid.style.border = '3px solid black';
})

Cor3_CorollaHybrid.addEventListener('click', function() {
    corolla_hybrid.src = 'img/corolla-hybrid/Cinza-Granito.png';
    corolla_hybrid_cor.innerHTML = 'Cinza Granito';
    corolla_hybrid_preco.innerHTML = 'R$ 191.020,00';

    btn_cores_corolla_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_CorollaHybrid.style.border = '3px solid black';
})

// Seção Corolla Cross Hybrid
const corolla_cross_hybrid = document.getElementsByClassName('corolla-cross-hybrid')[0];
const corolla_cross_hybrid_cor = document.getElementById('corolla_cross_hybrid_cor')
const corolla_cross_hybrid_preco = document.getElementById('corolla_cross_hybrid_preco')
const btn_cores_corolla_cross_hybrid = document.querySelectorAll('.btn-cores-corolla-cross-hybrid');

const Cor1_CorollaCrossHybrid = document.getElementById('cor1_corolla-cross-hybrid');
const Cor2_CorollaCrossHybrid = document.getElementById('cor2_corolla-cross-hybrid');
const Cor3_CorollaCrossHybrid = document.getElementById('cor3_corolla-cross-hybrid');

Cor1_CorollaCrossHybrid.addEventListener('click', function() {
    corolla_cross_hybrid.src = 'img/corolla-cross-hybrid/Azul-Topazio.png';
    corolla_cross_hybrid_cor.innerHTML = 'Azul Topázio';
    corolla_cross_hybrid_preco.innerHTML = 'R$ 221.910,00';

    btn_cores_corolla_cross_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_CorollaCrossHybrid.style.border = '3px solid black';
})

Cor2_CorollaCrossHybrid.addEventListener('click', function() {
    corolla_cross_hybrid.src = 'img/corolla-cross-hybrid/Prata-Lua-Nova.png';
    corolla_cross_hybrid_cor.innerHTML = 'Prata Lua Nova';
    corolla_cross_hybrid_preco.innerHTML = 'R$ 221.910,00';

    btn_cores_corolla_cross_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_CorollaCrossHybrid.style.border = '3px solid black';
})

Cor3_CorollaCrossHybrid.addEventListener('click', function() {
    corolla_cross_hybrid.src = 'img/corolla-cross-hybrid/Vermelho-Granada.png';
    corolla_cross_hybrid_cor.innerHTML = 'Vermelho Granada';
    corolla_cross_hybrid_preco.innerHTML = 'R$ 221.910,00';

    btn_cores_corolla_cross_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_CorollaCrossHybrid.style.border = '3px solid black';
})

// Seção RAV4 Hybrid
const rav4_hybrid = document.getElementsByClassName('rav4-hybrid')[0];
const rav4_hybrid_cor = document.getElementById('rav4_hybrid_cor')
const rav4_hybrid_preco = document.getElementById('rav4_hybrid_preco')
const btn_cores_rav4_hybrid = document.querySelectorAll('.btn-cores-rav4-hybrid');

const Cor1_RAV4Hybrid = document.getElementById('cor1_rav4-hybrid');
const Cor2_RAV4Hybrid = document.getElementById('cor2_rav4-hybrid');
const Cor3_RAV4Hybrid = document.getElementById('cor3_rav4-hybrid');

Cor1_RAV4Hybrid.addEventListener('click', function() {
    rav4_hybrid.src = 'img/rav4-hybrid/Vermelho-Emoção.png';
    rav4_hybrid_cor.innerHTML = 'Vermelho Emoção/Preto';
    rav4_hybrid_preco.innerHTML = 'R$ 399.990,00';

    btn_cores_rav4_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor1_RAV4Hybrid.style.border = '3px solid black';
})

Cor2_RAV4Hybrid.addEventListener('click', function() {
    rav4_hybrid.src = 'img/rav4-hybrid/Azul-Topazio.png';
    rav4_hybrid_cor.innerHTML = 'Azul topázio/Preto';
    rav4_hybrid_preco.innerHTML = 'R$ 399.990,00';

    btn_cores_rav4_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor2_RAV4Hybrid.style.border = '3px solid black';
})

Cor3_RAV4Hybrid.addEventListener('click', function() {
    rav4_hybrid.src = 'img/rav4-hybrid/Cinza-Metalizado.png';
    rav4_hybrid_cor.innerHTML = 'Cinza Metalizado/Preto';
    rav4_hybrid_preco.innerHTML = 'R$ 399.990,00';

    btn_cores_rav4_hybrid.forEach(btn => {
        btn.style.border = 'none';
    })

    Cor3_RAV4Hybrid.style.border = '3px solid black';
})