function generarColorHex() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generarPaleta(cantidad = 5) {
  const colores = [];

  for (let i = 0; i < cantidad; i++) {
    colores.push(generarColorHex());
  }

  return colores;
}

const paletteContainer = document.getElementById("palette");
const button = document.getElementById("generate-btn");

function renderizarPaleta() {
  const colores = generarPaleta();

  paletteContainer.innerHTML = "";

  colores.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.backgroundColor = color;
    div.textContent = color;

    paletteContainer.appendChild(div);
  });
}

button.addEventListener("click", renderizarPaleta);

// Primera carga
renderizarPaleta();