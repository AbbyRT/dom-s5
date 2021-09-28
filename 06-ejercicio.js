/* colocar una lsita en el documento HTML
Colocar un boton que diga agregar elemento
cada vez que le den click al botoon va agregar elementos a la lista
 */
const $btn = document.querySelector('#btn');
const $lista = document.querySelector('.lista'); //lista por editar
const input = document.querySelector('#input'); //info introducida por el usuario
/* funcio  para editar lista */
$btn.addEventListener('click', ()=>{
    const newElementList = document.createElement('li');/* para crear elemento HTML, elemento de lista*/
    newElementList.textContent = input.value;
    $lista.appendChild(newElementList);/* para agregar al elemento DENTRO de la lista */
})