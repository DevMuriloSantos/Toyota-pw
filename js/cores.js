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