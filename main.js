function playSonido (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  //el atributolength que se encuentra en las listas y que nos ayuda a obtener dinámicamente el valor del tamaño de una lista.
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  console.log(contador);

  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function () {
    playSonido(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code ===/*operador de comparación estricta.*/ "Space" || /*operador or*/ evento.code === "Enter") {
      tecla.classList.add("activa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("activa");
  };
}