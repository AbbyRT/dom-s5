
/* acceder a elementos en concreto: */
/* const title = document.getElementsByTagName('h1');
/* va  buscar dentro del html las etiquetas h1 y las va a devolver 
devuelve un arrglo de lso elemntos que tengan esa  */
/* title[0].innerHTML = 'Título cambiado desde Javascript';
/* en la pag web va a aparecer este nuevo titulos */
/* const texto = document.getElementById('text');
texto.innerHTML = 'Texto cambiado desde Javascript';
texto.style.background= 'blue';
texto.style.color = 'white';

console.log(texto); */  
/* normalmente se agregan o quitan clases */ 

/* parte 2 */
/* queryselector es mas general, se especficia si se trata de una tag o una clase poniendo un punto o un gato */

const texto = document.querySelector('#text'); /*  id (gato)o una tag (punto) */
texto.textContent = 'Estoy escribiendo desde javascript :v';
/* textContent para modificar lo que hay dentrp del elemento ya sea tag o id */
/* con innerhtml si se pueden poner etiquetas como <br/>, con text content no */


/* obtiene elementos por clas y dvuleve un arreglo */
document.getElementsByClassName
/* obtiene los elementos por nombre y devuelve un arreglo */
document.getElementsByName

/* crear elementos html, lo añade hasta el final */
const div = document.createElement('div');
const body = document.querySelector('body');
body.append(div);
/* dom como se conecta el js con html */