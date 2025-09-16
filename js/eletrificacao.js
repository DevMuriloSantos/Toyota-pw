const btn_eletrificacao = document.querySelectorAll('.btn-eletrificacao')

const inicio = document.getElementById('btn-inicio')
const div_inicio = document.getElementById('inicio')

const funcionamento = document.getElementById('btn-funcionamento')
const div_funcionamento = document.getElementById('funcionamento')

inicio.addEventListener('click', function () {
    div_inicio.style.display = "block"
    div_funcionamento.style.display = "none"

    btn_eletrificacao.forEach(btn => {
        btn.classList.remove('active')
    })
    inicio.classList.add('active')
})

funcionamento.addEventListener('click', function () {
    div_inicio.style.display = "none"
    div_funcionamento.style.display = "grid"

    btn_eletrificacao.forEach(btn => {
        btn.classList.remove('active')
    })
    funcionamento.classList.add('active')
})