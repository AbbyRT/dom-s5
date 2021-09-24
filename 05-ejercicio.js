const $body = document.querySelector('body');/* se necesita a body ya que se va modificar */
const $selectorColor = document.querySelector('#colors');
/* se lee la opcion elegida por el usuario */

$selectorColor.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'red':
            $body.className = '';
            $body.classList.add('red');
            break;
        case 'blue':
            $body.className = '';
            $body.classList.add('blue');
            break;
        case 'green':
            $body.className = '';
            $body.classList.add('green');
            break;
        default:
            $body.className = '';
            break;
    }
    /*   if(e.target.value==='red'){
          $body.className = '';
          $body.classList.add('red');
      }else if(e.target.value==='blue'){
          $body.className = '';
          $body.classList.add('blue');
      }else if(e.target.value==='green'){
          $body.className = '';
          $body.classList.add('green');
      } */
});