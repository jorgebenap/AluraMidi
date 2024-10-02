function playSonidoPom () {
  document.querySelector("#sonido_tecla_pom").play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = playSonidoPom;

//document.querySelector('.tecla_pom').onclick = playSonidoPom;

function playSonidoClap () {
  document.querySelector("#sonido_tecla_clap").play();
}

document.querySelector('.tecla_clap').onclick = playSonidoClap;

listaDeTeclas[3].onclick = playSonidoClap;