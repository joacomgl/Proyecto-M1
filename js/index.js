const paletteContainer = document.getElementById("palette");
const button = document.getElementById("generate-btn");
const selectCantidad = document.getElementById("cantidad");
const hslBtn = document.getElementById("hsl-btn");
const hexBtn = document.getElementById("hex-btn");
let formatoActual = "";



//Activacion botones
hslBtn.addEventListener("click", function () {
  formatoActual = "hsl";

  hslBtn.classList.add("activo");
  hexBtn.classList.remove("activo");

  renderizarPaleta();
});

hexBtn.addEventListener("click", function () {
  formatoActual = "hex";

  hexBtn.classList.add("activo");
  hslBtn.classList.remove("activo");

  renderizarPaleta();
});


// Colores en hsl
function generarColorHSL() {
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 41) + 60; // 60 a 100
  let l = Math.floor(Math.random() * 31) + 35; // 35 a 65

  return `hsl(${h}, ${s}%, ${l}%)`;
}

// Colores en hex
function generarColorHex() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Paleta segun cantidad
function generarPaleta(cantidad) {
  const colores = [];

  for (let i = 0; i < cantidad; i++) {
    colores.push(generarColorHSL());
  }
  return colores;
}

// Paleta en pantalla
function renderizarPaleta() {
  const cantidad = Number(selectCantidad.value);
  const colores = generarPaleta(cantidad);

  paletteContainer.innerHTML = "";

  colores.forEach(function(color) {
    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.backgroundColor = color;
    div.textContent = color;

    paletteContainer.appendChild(div);
  });
}

// Boton y lista
button.addEventListener("click", renderizarPaleta);
selectCantidad.addEventListener("change", renderizarPaleta);

// Primera carga
renderizarPaleta();