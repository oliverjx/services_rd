/* Se declaro constante document donde el queryselector se utiliza como selector de css que es el #slider*/
const slider = document.querySelector("#slider");
/*se utiliza como variable, lo mismo en vez que const, pero el querySelectorAll con all porque hace referencia a varias secciones*/ 
let sliderSection = document.querySelectorAll(".slider__section");
/*Estoy obteniendo la ultima section */
let sliderSectionLast = sliderSection[sliderSection.length -1];

/*Constantes para los botones */
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

/*Metodo insertAdjacentElement donde obtendra el ultimo elemento para que depues que empiece pone el ultimo al principio*/
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

/*Funcion para darle click al slider para que se vaya a la derecha o izquierda */
function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  
  /*Avanzará 200% y va a hacer eso en medio segundo, lo cual es el tiempo que dura para realizar su trancision  */
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";

  /*Aquí edita la transition con un none, o sea, quitandolo */
  setTimeout(function(){
    slider.style.transition = "none";
    
    /*Metodo insertAdjacentElement donde obtendra el primer elemento para que antes de que termine pone el primero al final*/
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

/*Funcion para el boton derecho para dar click y vaya a la siguiente seccion */
btnRight.addEventListener('click', function(){
  Next();
});
/*Funcion para el boton izquierdo para dar click y vaya a la anterior seccion */
btnLeft.addEventListener('click', function(){
  Prev();
});

/*Funcion de que avance a la derecha (cambie de imagen/seccion) automaticamente */
setInterval(function(){
  Next();
}, 5000);