/* diferenciar entre variables y constantes
, $ para saber que es un elemento de html */
const $btn = document.querySelector('#btn');
/* agrefar eventlistener 
variable
addeventlistener
evento a revisar
funcion vacia de flecha*/

$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');
/*el evento keyup se dispara despues de soltzr la tecla, keydown se ejcuta antes, por lo que habra un retraso con keydown, por ejemplo co un input de 123456:
keydown: 1234
keyup: 123456 */
$inpText.addEventListener('keydown', (e) => {
    console.log('escribiste algo');/* para esto no es necesario poner la e como parametro */
    console.log(e);
    /* la e es el caracter que va ingresando el usuario en tiempo real, hay varia info en la variable. Es e de evento. Ya que es una funcion anonima la e es una variable local */
    console.log(e.target.value);
    /* con esto no solo sale un caracter, sino las letras anteriores tambien */
});
/* evento cuando el mouse pase por el: mouseover */