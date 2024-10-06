function playSonido (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


/*for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  console.log(contador);

  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function (){
    playSonido(idAudio);
    };

  tecla.onkeydown = function (tecla) {
    if (tecla.key == 'Tab'){
      tecla.preventDefault(); 
    } 
      tecla.classList.add('activa');
  };

  tecla.onkeyup = function (tecla) {
    if (tecla.key == 'Tab') {
      tecla.preventDefault();
    } 
    tecla.classList.remove("activa");
  };
}*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  console.log(contador);

  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function () {
    playSonido(idAudio);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code === "Space");
    if (evento.code === 'Space' ){
      tecla.classList.add("activa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("activa");
  }
}