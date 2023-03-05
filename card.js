const $tarjeta = document.querySelector('.tarjeta'),
  $respuesta = document.querySelector('.respuesta'),
  elemt = document.querySelector('.js'),
  contbtn=document.querySelector(".conbtn"),
  boton = document.querySelector('.btnsumit');

  const numbers=Array(5).fill(1).map((_, i) => i+1),
  bot=numbers
   .map((el)=>{
    return `<button class="btn ${el}">${el}</button>`
  }).join(" ");
  contbtn.innerHTML=bot;

const targeta = () => {
  $tarjeta.addEventListener('click', ({ target }) => {
    if (target.classList[0] == 'btn') {
      target.classList.toggle('orange');
      elemt.classList.toggle('active');
      boton.classList.toggle('valor');
      elemt.innerHTML = `<p>You selected ${target.classList[1]} out of 5</p>`;
    }
    if (target.classList[1] == 'valor') {
      $tarjeta.classList.add('none');
      $respuesta.classList.add('flex');
    }
  });
};

targeta();
