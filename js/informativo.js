const nome_informativo = document.getElementById('nome_informativo')
const email_informativo = document.getElementById('email_informativo')
const tel_informativo = document.getElementById('tel_informativo')
const data_informativo = document.getElementById('data_informativo')
const periodo_informativo = document.getElementById('periodo_informativo')

for(let i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i) == 'User_agendamento') {
        const agendamento = JSON.parse(localStorage.getItem(localStorage.key(i)))

        nome_informativo.textContent = agendamento.nome
        email_informativo.textContent = agendamento.email
        tel_informativo.textContent = agendamento.telefone
        periodo_informativo.textContent = agendamento.periodo
        let dataFormatada = new Date(agendamento.data).toLocaleDateString('pt-BR')
        data_informativo.textContent = dataFormatada
        
        console.log(agendamento)
    }
}

document.getElementsByClassName('btn-toyota')[0].addEventListener('click', () => {
    for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) == 'User_agendamento') {
            localStorage.removeItem(localStorage.key(i))
        }
    }
})