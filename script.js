const primerTitulo = document.getElementById("primer-titulo");
primerTitulo.textContent = "Adios";

const encabezadoRojo = document.getElementById("encabezado");
encabezadoRojo.style.color = "orange";

const encabezadoClicMarron = document.getElementById("encabezado-clic-marron");
encabezadoClicMarron.addEventListener("click", () => {
  encabezadoClicMarron.style.color = "brown";
});

document.getElementById("reto-extra").textContent = "Hecho con Amor";

