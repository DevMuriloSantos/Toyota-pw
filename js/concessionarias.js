const buscar = document.getElementById('buscar');

const card_sorocaba = document.getElementsByClassName('card-mapa-sorocaba')[0];
const mapa_sorocaba = document.getElementsByClassName('mapa-sorocaba')[0];

const card_sp = document.getElementsByClassName('card-mapa-sp')[0];
const mapa_sp = document.getElementsByClassName('mapa-sp')[0];

const card_jp = document.getElementsByClassName('card-mapa-jp')[0];
const mapa_jp = document.getElementsByClassName('mapa-jp')[0];

const card_cab = document.getElementsByClassName('card-mapa-cab')[0];
const mapa_cab = document.getElementsByClassName('mapa-cab')[0];

buscar.addEventListener('click', () => {
    const estado = document.getElementById('id_estado');
    const cidade = document.getElementById('id_cidade');

    if (estado.value == '0' || cidade.value == '0') {
        alert('[ERROR] Verifique os campos acima e tente novamente!');
        estado.style.border = '2px solid red';
        estado.style.color = 'red';
        cidade.style.border = '2px solid red';
        cidade.style.color = 'red';

        estado.classList.add('erro');
        cidade.classList.add('erro');

        setTimeout(() => {
            estado.classList.remove('erro');
            cidade.classList.remove('erro');
        }, 300);

        return;
    }

    estado.style.border = '1px solid #676767';
    estado.style.color = 'black';
    cidade.style.border = '1px solid #676767';
    cidade.style.color = 'black';

    if (estado.value == 'SP' && cidade.value == 'SOR') {
        card_sorocaba.style.display = 'block';
        mapa_sorocaba.style.display = 'block';

        card_jp.style.display = 'none';
        mapa_jp.style.display = 'none';
        card_sp.style.display = 'none';
        mapa_sp.style.display = 'none';
        card_cab.style.display = 'none';
        mapa_cab.style.display = 'none';
    } else if (estado.value == 'SP' && cidade.value == 'SP') {
        card_sp.style.display = 'block';
        mapa_sp.style.display = 'block';

        card_sorocaba.style.display = 'none';
        mapa_sorocaba.style.display = 'none';
        card_jp.style.display = 'none';
        mapa_jp.style.display = 'none';
        card_cab.style.display = 'none';
        mapa_cab.style.display = 'none';
    } else if (estado.value == 'PB' && cidade.value == 'JP') {
        card_jp.style.display = 'block';
        mapa_jp.style.display = 'block';

        card_sp.style.display = 'none';
        mapa_sp.style.display = 'none';
        card_sorocaba.style.display = 'none';
        mapa_sorocaba.style.display = 'none';
        card_cab.style.display = 'none';
        mapa_cab.style.display = 'none';
    } else if (estado.value == 'PB' && cidade.value == 'CAB') {
        card_cab.style.display = 'block';
        mapa_cab.style.display = 'block';

        card_jp.style.display = 'none';
        mapa_jp.style.display = 'none';
        card_sp.style.display = 'none';
        mapa_sp.style.display = 'none';
        card_sorocaba.style.display = 'none';
        mapa_sorocaba.style.display = 'none';
    } else {
        alert('[ERROR] Selecione a cidade correspondente ao seu estado!');
        estado.style.border = '2px solid red';
        estado.style.color = 'red';
        cidade.style.border = '2px solid red';
        cidade.style.color = 'red';

        estado.classList.add('erro');
        cidade.classList.add('erro');

        setTimeout(() => {
            estado.classList.remove('erro');
            cidade.classList.remove('erro');
        }, 300);

        return;
    }
});