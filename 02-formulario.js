const nameTitle = document.querySelector('#name');
/* se lee el titulo, se hace referentcia */
const input = document.querySelector('#input');
/* se obtiene TODO lo que hay en el input, se recupera lo que el usuaio ingreo , no solo esta el valro, estan otras caracteristicas*/

/* funcion de flecha :v */
const writeName = () => {
    const inputValue = input.value; /* se guarda lo que hya en el intpu, se extrae  */
    nameTitle.textContent = inputValue; /* se reescribr lo que hay en el titulo de la pag :V */
}