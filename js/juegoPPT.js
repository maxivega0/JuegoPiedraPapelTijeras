
  let i = 1;
  const eleccionMaquina = () => Math.floor(Math.random() * 3) + 1;
  let seccionPadre = document.querySelector("#contenedorPadre");
  let maquina = 0;
function juego() {
    // btn piedra
    let btnPiedra = document.createElement("button");
    btnPiedra.innerHTML = 'PIEDRA';
    seccionPadre.appendChild(btnPiedra);
    btnPiedra.className += "btn btn-secondary m-3 btn-lg col-3";
    btnPiedra.addEventListener("click", piedra)
    // btn papel
    let btnPapel = document.createElement("button");
    btnPapel.innerHTML = 'PAPEL';
    seccionPadre.appendChild(btnPapel);
    btnPapel.className += "btn btn-info m-3 btn-lg col-3";
    btnPapel.addEventListener("click", papel)
    // btn tijeras
    let btnTijera = document.createElement("button");
    btnTijera.innerHTML = 'TIJERAS';
    seccionPadre.appendChild(btnTijera);
    btnTijera.className += "btn btn-danger m-3 btn-lg col-3";
    btnTijera.addEventListener("click", tijeras)
}

function piedra() {
  maquina = eleccionMaquina();
  let resultado = "";
  let parrafo = document.createElement("p");
  if (maquina === 1) {
    resultado = `¡Es un empate!<br>`;
    maquina = 'Piedra';
    parrafo.innerHTML = `<div class="alert alert-warning my-3">Piedra vs ${maquina}: ${resultado}</div> `;
  } else if (maquina === 2) {
    resultado = `¡Usted perdió!<br>`;
    maquina = 'Papel';
    parrafo.innerHTML = `<div class="alert alert-danger my-3">Piedra vs ${maquina}: ${resultado}</div> `;
  } else {
    resultado = `¡Usted ganó!<br>`;
    maquina = 'Tijeras';
    parrafo.innerHTML = `<div class="alert alert-success my-3">Piedra vs ${maquina}: ${resultado}</div> `;
  }
  seccionPadre.appendChild(parrafo);
  i++;
}
function papel() {
  maquina = eleccionMaquina();
  let resultado = "";
  let parrafo = document.createElement("p");
  if (maquina === 1) {
    resultado = `¡Usted ganó!<br>`;
    maquina = 'Piedra';
    parrafo.innerHTML = `<div class="alert alert-success my-3">Papel vs ${maquina}: ${resultado}</div> `;
  } else if (maquina === 2) {
    resultado = `¡Es un empate!<br>`;
    maquina = 'Papel';
    parrafo.innerHTML = `<div class="alert alert-warning my-3">Papel vs ${maquina}: ${resultado}</div> `;
  } else {
    resultado = `¡Usted perdió!<br>`;
    maquina = 'Tijeras';
    parrafo.innerHTML = `<div class="alert alert-danger my-3">Papel vs ${maquina}: ${resultado}</div> `;
  }

  seccionPadre.appendChild(parrafo);
  i++;
}
function tijeras() {
  maquina = eleccionMaquina();
  let resultado = "";
  let parrafo = document.createElement("p");
  if (maquina === 1) {
    resultado = `¡Usted perdió!<br>`;
    maquina = 'Piedra';
    parrafo.innerHTML = `<div class="alert alert-danger my-3">Tijeras vs ${maquina}: ${resultado}</div> `;
  } else if (maquina === 2) {
    resultado = `¡Usted ganó!<br>`;
    maquina = 'Papel';
    parrafo.innerHTML = `<div class="alert alert-success my-3">Tijeras vs ${maquina}: ${resultado}</div> `;
  } else {
    resultado = `¡Es un empate!<br>`;
    maquina = 'Tijeras';
    parrafo.innerHTML = `<div class="alert alert-warning my-3">Tijeras vs ${maquina}: ${resultado}</div> `;
  }
  seccionPadre.appendChild(parrafo);
  i++;
}
