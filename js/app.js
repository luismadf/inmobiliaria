const casasSlider = document.querySelector(".casas-slider");

let casasDB = [
  {
    nombre: "Casa en el Campo",
    ubicacion: "Ohio, U.S.A.",
    banos: 3,
    habitaciones: 2,
    cochera: 2,
    precio: 50.0,
    imagen: "casa1.jpg",
  },
  {
    nombre: "Casa en la Ciudad",
    ubicacion: "Washington, U.S.A.",
    banos: 3,
    habitaciones: 2,
    cochera: 2,
    precio: 50.0,
    imagen: "casa2.jpg",
  },
  {
    nombre: "Casa en la Ciudad",
    ubicacion: "New York, U.S.A.",
    banos: 3,
    habitaciones: 2,
    cochera: 2,
    precio: 50.0,
    imagen: "casa3.jpg",
  },
];

mostrarCasas();

function mostrarCasas() {
  casasDB.forEach((casa) => {
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
        <p>${ubicacion}</p>
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
    casasSlider.appendChild(div);
  });
}
