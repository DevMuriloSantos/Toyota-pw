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

            const nome = document.getElementById('validationCustom01').value
            const email = document.getElementById('validationCustom02').value
            const telefone = document.getElementById('validationCustom03').value
            const data = document.getElementById('validationCustom04').value
            const periodo = document.getElementById('validationCustom05').value

            localStorage.setItem('User_agendamento', JSON.stringify({ nome, email, telefone, data, periodo })) // salva os dados no localStorage em formato JSON

            alert('Agendamento realizado com sucesso!')
            window.location.href = 'informativo.html'
        })
    }, false)
})()
