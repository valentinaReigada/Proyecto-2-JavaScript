// obtengo div del banner
const banner = document.getElementById("contenedor-banner");

// creo los elementos necesarios
const titulo = document.createElement("div");
const descripcion = document.createElement("div");
const botonera = document.createElement("div");
const botonReproducir = document.createElement("div");
const botonVerMas = document.createElement("div");
// le doy estilos
titulo.className = "banner-titulo";
descripcion.className = "banner-descripcion desc-corta";
botonera.className = "banner-botonera";
botonReproducir.className = "botones";
botonVerMas.className = "botones btn-VerMas";

// inyeccion de còdigo va a hacer con el array de peliculas,
// la destacada tendra que estar aqui

titulo.innerHTML = "LA DESPEDIDA";
descripcion.innerHTML = `La pareja de Henry y Ana, viajan a una excursión pero no sabian que ese viaje tendria que ver por la sorpresiva despedida.
<br/> Habra cruces entre ex parejas, ¿Coincidencia de encuentros?.`;

botonReproducir.innerHTML = `<i class="bi bi-play-fill"></i> Reproducir`;
botonVerMas.innerHTML = `<i class="bi bi-info-circle"></i> Mas Información`;

botonera.appendChild(botonReproducir);
botonera.appendChild(botonVerMas);
banner.appendChild(titulo);
banner.appendChild(descripcion);
banner.appendChild(botonera);
