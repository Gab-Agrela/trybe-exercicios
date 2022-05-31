const button = document.querySelector('#enviar');
const form   = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');


button.addEventListener('click', (event) => {
    event.preventDefault();
    form.submit();
});

const button2 = document.querySelector('#opcao2');


button2.addEventListener(('click') , () => {
    if (button2.checked !== true ){
    button.disabled = true;
    }else {
        button.disabled = false;
    }
})

button.addEventListener('click', () => {
    if((nome.value.length > 10 && nome.value.length < 40) || (email.value.length > 10 && email.value.length < 50 )) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }else {
        alert('Dados Inválidos');
    }
})