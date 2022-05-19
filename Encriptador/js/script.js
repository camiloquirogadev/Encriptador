const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");
const textoValido = /[0-9A-ZáéíóúÑñÁÉÍÓÚ&@#%!¡¿?~]/;


window.addEventListener('load', () => {
  inputTexto.focus()
})

function validInput(key) {
  if (inputTexto.value.match(textoValido)) {
    alert('Solo letras minúsculas y sin acentos')
    inputTexto.value = inputTexto.value.slice(0, -1)
  }
}
inputTexto.addEventListener('keyup', validInput)



function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  StringParaEncriptar = StringParaEncriptar.toLowerCase();


  for (let i = 0; i < matrizCodigo.length; i++) {
    if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
      StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }

  return StringParaEncriptar;
}


function btnDesencriptar() {
  const StringParaDesencriptar = Desencriptar(inputTexto.value);
  mensaje.value = StringParaDesencriptar;
}

function Desencriptar(StringParaDesencriptar) {

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

  StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (StringParaDesencriptar.includes(matrizCodigo[i][1])) {
      StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return StringParaDesencriptar;

}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand('copy');
  alert("Texto copiado en portapapeles")
}
