//limpieza y filtrado del texto que se ingresa

const elementos = document.getElementsByClassName("miTextarea");

for (let i = 0; i < elementos.length; i++) {
  const elemento = elementos[i];
  const valor = elemento.value;
  elemento.addEventListener("input", function () {
    const texto = elemento.value;
    const textoLimpio = limpiarTexto(texto);

    if (texto !== textoLimpio) {
      elemento.value = textoLimpio;
      mostrarTooltip(
        "Disculpa, no se permiten mayúsculas, acentos o caracteres especiales."
      );
    }
  });
}

function mostrarTooltip(mensaje) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = mensaje;
  document.body.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 2000);
}

function limpiarTexto(texto) {
  const textoSinAcentos = texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const textoLimpio = textoSinAcentos
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase();
  return textoLimpio;
}

// selección y copiado

const copiarTexto = document.querySelector(".miTextarea2");

function copiar() {
  copiarTexto.select();
  navigator.clipboard.writeText(copiarTexto.value);
  copiarTexto.value = "";
}

// encriptación y desencriptación
const textArea1 = document.querySelector(".miTextarea");
const textArea2 = document.querySelector(".miTextarea2");

function botonEncriptar() {
  const textoEncriptado = encriptar(textArea1.value);
  textArea2.value = textoEncriptado;
  textArea1.value = "";
}

function encriptar(ingresoEncriptado) {
  let reglasEncriptado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < reglasEncriptado.length; i++) {
    if (ingresoEncriptado.includes(reglasEncriptado[i][0])) {
      ingresoEncriptado = ingresoEncriptado.replaceAll(
        reglasEncriptado[i][0],
        reglasEncriptado[i][1]
      );
    }
  }
  return ingresoEncriptado;
}

function botonDesencriptar() {
  const textoEncriptado = desencriptar(textArea1.value);
  textArea2.value = textoEncriptado;
  textArea1.value = "";
}

function desencriptar(resultadoDesencriptado) {
  let reglasEncriptado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < reglasEncriptado.length; i++) {
    if (resultadoDesencriptado.includes(reglasEncriptado[i][1])) {
      resultadoDesencriptado = resultadoDesencriptado.replaceAll(
        reglasEncriptado[i][1],
        reglasEncriptado[i][0]
      );
    }
  }
  return resultadoDesencriptado;
}
