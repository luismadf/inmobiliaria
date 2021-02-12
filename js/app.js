const resultado = document.querySelector(".casas-slider");
const minimo = document.querySelector("#min-filter");
const maximo = document.querySelector("#max-filter");
const estado = document.querySelector("#state-filter");

const datosBusqueda = {
  estado: "",
  minimo: "",
  maximo: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarCasas(casasDB);
  llenarSelect();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarCasas();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarCasas();
});
estado.addEventListener("change", (e) => {
  datosBusqueda.estado = e.target.value;
  filtrarCasas();
});

function llenarSelect() {
  for (let i = 0; i < casasDB.length; i++) {
    const option = document.createElement("option");
    option.value = casasDB[i].ubicacion;
    option.textContent = casasDB[i].ubicacion;
    estado.appendChild(option);
  }
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function filtrarCasas() {
  console.log(datosBusqueda);
}

function mostrarCasas(casas) {
  limpiarHTML();
  casas.forEach((casa) => {
    const {
      nombre,
      ubicacion,
      imagen,
      banos,
      habitaciones,
      cochera,
      precio,
    } = casa;
    const div = document.createElement("div");
    div.classList.add("card");
    div.style.background = `url("../assets/${imagen}")`;
    div.style.backgroundPosition = "center";
    div.style.backgroundSize = "cover";
    div.innerHTML = `
    <div class="card-text">
    <p class="titulo">${nombre}</p>
    <div class="ubicacion-container">
      <div class="ubicacion">
        <p>${ubicacion}, U.S.A.</p>
      </div>
      <div class="precio">
        <p>$50.000</p>
      </div>
    </div>
    <div class="detalles">
      <ul>
        <li><i class="fas fa-toilet"></i> 3</li>
        <li><i class="fas fa-bed"></i> 2</li>
        <li><i class="fas fa-car"></i></i> 2</li>
      </ul>
    </div>
    <a href="#" class="boton-ver-mas">Más Información</a>
  </div>
    `;
    resultado.appendChild(div);
  });
}

function filtrarCasas() {
  const resultado = casasDB.filter(filtrarEstado);
  if (resultado.length) {
    mostrarCasas(resultado);
  }
  console.log(resultado);
}

function filtrarEstado(casa) {
  const { estado } = datosBusqueda;
  if (estado) {
    return casa.ubicacion === estado;
  }
  return casa;
}
