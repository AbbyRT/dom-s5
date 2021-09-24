/* <!-- pregntar edad input, decir si son mayors o menores de edad en pantalla, funcion con boton --> */
const input = document.querySelector('#input'); /*obtener datos de usuario */
const mensaje = document.querySelector('#resultado'); 

const infoResult = () => {
    const edad = parseInt(input.value);
    if((edad<0)||(isNaN(edad))){
        mensaje.textContent = ('Revisa tus valores');

    }else{
        mensaje.textContent = edad>=18 ? ('Eres mayor de edad') : ('Eres menor de edad');
    }  
   /* se reescribe lo que hay en la pag :V */
}