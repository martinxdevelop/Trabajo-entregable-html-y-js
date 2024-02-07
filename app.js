//1

let imagen = document.getElementById('imagen');

function mouseOver(){
    imagen.src = "images/images2.jpg";
    imagen.classList.add("contenido-derecho img");
};

imagen.addEventListener('mouseover',mouseOver);

function mouseOut(){
    imagen.src = "images/images1.jpg";
    imagen.classList.add("contenido-derecho img");
};

imagen.addEventListener('mouseout',mouseOut);


//2



let botonSaberMas = document.querySelectorAll('.boton2');

botonSaberMas.forEach((boton) => {
  boton.addEventListener('click', () => {


    let contenedorPopup = document.querySelector('.popup1');


    contenedorPopup.style.display = 'block';
    botonSaberMas.forEach((boton) => {
      boton.style.display = 'none';
   });
});
});

let botonCerrar = document.querySelector('#btn');

botonCerrar.addEventListener('click', () => {

  let contenedorPopup = document.querySelector('.popup1');
  contenedorPopup.style.display = 'none';

 
  let botonSaberMas = document.querySelectorAll('.boton2');
  botonSaberMas.forEach((boton) => {
    boton.style.display = 'block';
});
});


//3

let botonEnviarMensaje = document.getElementById('botonformulario');

botonEnviarMensaje.addEventListener('click', () => {

  let mensajeexito = document.querySelector('.avisodeenvio');

  mensajeexito.style.display = 'block'
  botonEnviarMensaje.style.display = 'none';
});



//4

const slider = document.querySelector('.feature-row');
const sliderImagenes = document.querySelectorAll('.feature-box');

let index = 0;

function imagenSlider(direccion) {
  index += direccion;
  if (index < 0) {
    index = sliderImagenes.length - 1;
  } else if (index >= sliderImagenes.length) {
    index = 0;
  }

  let posicion = -index * sliderImagenes[0].offsetWidth;
  slider.style.transform = `translateX(${posicion}px)`;
}

imagenSlider(0);



