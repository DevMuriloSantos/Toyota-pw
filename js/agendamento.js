// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
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

            const data = document.getElementById('validationCustom04');
            const valorData = data.value;
            console.log(valorData);
            alert('Agendamento realizado com sucesso!')
        }, false)
    })
})()