// // INYECCION DE PELICULAS
const listaPeliculas = JSON.parse(sessionStorage.getItem("peliculas"));

// OBTENGO DIV PARA LOS CAROUSELES
const contenedorCarouselRecomendadas = document.getElementById(
  "contenedor-recomendadas"
);
const contenedorCarouselTerror = document.getElementById("contenedor-terror");
const contenedorCarouselComedia = document.getElementById("contenedor-comedia");

// Creo contenedor para corousel.
const divCarouselRecomendadas = document.createElement("div");
const divCarouselTerror = document.createElement("div");
const divCarouselComedia = document.createElement("div");

// Asigno clases a contenedor del carousel.
divCarouselRecomendadas.className = "m-carousel";
divCarouselTerror.className = "m-carousel";
divCarouselComedia.className = "m-carousel";

const cargar_PelisDestacadas = () => {
  let peliculas_Recomendadas = listaPeliculas.filter(
    (p) => p.categoria === "Recomendadas"
  );
  for (let i = 0; i < peliculas_Recomendadas.length; i++) {
    let pelicula = peliculas_Recomendadas[i];
    let divPelicula_r = document.createElement("div");
    divPelicula_r.className = "m-pelicula";
    divPelicula_r.innerHTML = `
  <a href="./error404.html"><img src="${pelicula.urlDeImagen}" alt="pelicula"></a>`;
    divCarouselRecomendadas.appendChild(divPelicula_r);
  }
  contenedorCarouselRecomendadas.appendChild(divCarouselRecomendadas);
};

const cargar_PelisTerror = () => {
  let peliculas_Terror = listaPeliculas.filter((p) => p.categoria === "Terror");

  for (let i = 0; i < peliculas_Terror.length; i++) {
    let pelicula = peliculas_Terror[i];
    let divPelicula_t = document.createElement("div");
    divPelicula_t.className = "m-pelicula";
    divPelicula_t.innerHTML = `
    <a href="./error404.html"><img src="${pelicula.urlDeImagen}" alt="pelicula"></a>`;
    divCarouselTerror.appendChild(divPelicula_t);
  }
  contenedorCarouselTerror.appendChild(divCarouselTerror);
};

const cargar_PelisComedia = () => {
  let peliculas_Comedia = listaPeliculas.filter(
    (p) => p.categoria === "Comedia"
  );

  for (let i = 0; i < peliculas_Comedia.length; i++) {
    let pelicula = peliculas_Comedia[i];
    let divPelicula_c = document.createElement("div");
    divPelicula_c.className = "m-pelicula";
    divPelicula_c.innerHTML = `
    <a href="./error404.html"><img src="${pelicula.urlDeImagen}" alt="pelicula"></a>`;
    divCarouselComedia.appendChild(divPelicula_c);
  }
  contenedorCarouselComedia.appendChild(divCarouselComedia);
};

const actualizarCatalogo = () => {
  cargar_PelisDestacadas();
  cargar_PelisTerror();
  cargar_PelisComedia();
};

actualizarCatalogo();

// ? --------------- Variables para posicionarse -----------------

const fila = document.getElementById("contenedor-recomendadas");

const filaTerror = document.getElementById("contenedor-terror");

const filaComedia = document.getElementById("contenedor-comedia");

const peliculas = document.querySelectorAll(".recomendadas .m-pelicula");

const peliculasTerror = document.querySelectorAll(".terror .m-pelicula");

const peliculasComedia = document.querySelectorAll(".comedia .m-pelicula");

const flechaIzquierda = document.getElementById("flecha-izq");

const flechaDerecha = document.getElementById("flecha-der");

const flechaIzquierdaTerror = document.getElementById("flecha-izq-terror");

const flechaDerechaTerror = document.getElementById("flecha-der-terror");

const flechaIzquierdaComedia = document.getElementById("flecha-izq-comedia");

const flechaDerechaComedia = document.getElementById("flecha-der-comedia");

// ! --------------- Recomendadas ------------------------
// ? --------------- Event Listener para la flecha derecha RECOMENDADAS -----------------
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector(".m-indicadores .activo");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
// ? --------------- Event Listener para la flecha izquierda RECOMENDADAS-----------------
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".m-indicadores .activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
// ! --------------- Terror ------------------------
// ? --------------- Event Listener para la flecha derecha TERROR -----------------
flechaDerechaTerror.addEventListener("click", () => {
  filaTerror.scrollLeft += filaTerror.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-terror .activo"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
//  ? --------------- Event Listener para la flecha izquierda TERROR -----------------
flechaIzquierdaTerror.addEventListener("click", () => {
  filaTerror.scrollLeft -= filaTerror.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-terror .activo"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
// ! --------------- Comedia ------------------------
// ? --------------- Event Listener para la flecha derecha COMEDIA -----------------
flechaDerechaComedia.addEventListener("click", () => {
  filaComedia.scrollLeft += filaComedia.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-comedia .activo"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});
//  ? --------------- Event Listener para la flecha izquierda COMEDIA -----------------
flechaIzquierdaComedia.addEventListener("click", () => {
  filaComedia.scrollLeft -= filaComedia.offsetWidth;

  const indicadorActivo = document.querySelector(
    ".m-indicadores-comedia .activo"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

// ? --------------- Paginacion -----------------

// let calcularPagina = () => {
//   const numeroPaginasPrueba = 0;
//   if (window.screen.width === 320) {
//     numeroPaginasPrueba = Math.ceil(peliculas.length / 2);
//   } else if (window.screen.width === 768) {
//     numeroPaginasPrueba = Math.ceil(peliculas.length / 4);
//   } else if (window.screen.width === 1024) {
//     numeroPaginasPrueba = Math.ceil(peliculas.length / 10);
//   }

//   for (let i = 0; i < numeroPaginasPrueba; i++) {
//     const indicador = document.createElement("button");

//     if (i === 0) {
//       indicador.classList.add("activo");
//     }

//     document.querySelector(".m-indicadores").appendChild(indicador);
//     indicador.addEventListener("click", (e) => {
//       fila.scrollLeft = i * fila.offsetWidth;

//       document
//         .querySelector(".m-indicadores .activo")
//         .classList.remove("activo");
//       e.target.classList.add("activo");
//     });
//   }
//   return numeroPaginasPrueba;
// };
// ! --------------- Recomendadas ------------------------

function calcularPaginas() {
  let pag = 0;
  if (window.screen.availWidth <= 420) {
    pag = Math.ceil(peliculas.length / 2);
  } else if (window.screen.availWidth <= 820) {
    pag = Math.ceil(peliculas.length / 4);
  } else if (window.screen.availWidth <= 1600) {
    pag = Math.ceil(peliculas.length / 5);
  }

  const reiniciarBotones = document.querySelector(".m-indicadores");
  reiniciarBotones.innerHTML = "";

  for (let i = 0; i < pag; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    reiniciarBotones.appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      fila.scrollLeft = i * fila.offsetWidth;

      document
        .querySelector(".m-indicadores .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }
}

calcularPaginas();

// ! --------------- Terror ------------------------
function calcularPaginasTerror() {
  let pagTerror = 0;
  if (window.screen.availWidth <= 420) {
    pagTerror = Math.ceil(peliculasTerror.length / 2);
  } else if (window.screen.availWidth <= 820) {
    pagTerror = Math.ceil(peliculasTerror.length / 4);
  } else if (window.screen.availWidth <= 1600) {
    pagTerror = Math.ceil(peliculasTerror.length / 5);
  }

  const reiniciarBotones = document.querySelector(".m-indicadores-terror");
  reiniciarBotones.innerHTML = "";

  for (let i = 0; i < pagTerror; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    reiniciarBotones.appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      filaTerror.scrollLeft = i * filaTerror.offsetWidth;

      document
        .querySelector(".m-indicadores-terror .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }
}
calcularPaginasTerror();
// ! --------------- Comedia ------------------------
function calcularPaginasComedia() {
  let pagComedia = 0;
  if (window.screen.availWidth <= 420) {
    pagComedia = Math.ceil(peliculasComedia.length / 2);
  } else if (window.screen.availWidth <= 820) {
    pagComedia = Math.ceil(peliculasComedia.length / 4);
  } else if (window.screen.availWidth <= 1600) {
    pagComedia = Math.ceil(peliculasComedia.length / 5);
  }

  const reiniciarBotones = document.querySelector(".m-indicadores-comedia");
  reiniciarBotones.innerHTML = "";

  for (let i = 0; i < pagComedia; i++) {
    const indicador = document.createElement("button");

    if (i === 0) {
      indicador.classList.add("activo");
    }

    reiniciarBotones.appendChild(indicador);
    indicador.addEventListener("click", (e) => {
      filaComedia.scrollLeft = i * filaComedia.offsetWidth;

      document
        .querySelector(".m-indicadores-comedia .activo")
        .classList.remove("activo");
      e.target.classList.add("activo");
    });
  }
}
calcularPaginasComedia();
