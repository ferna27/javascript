const miformulario = document.getElementById("mi-formulario");
const nombreEvento = "submit";

const accionEvento = (Event) =>{

Event.preventDefault();


let pantallaAltoAncho = document.getElementById("pantallaAltoAncho")
let pantallaTexto = document.getElementById("pantallaTexto");


const altura= miformulario.elements.altura.value;
const ancho = miformulario.elements.ancho.value;
//const texto = miformulario.elements.texto.value;
const color = miformulario.elements.color.value;

const pantalla = document.getElementById("pantalla");
pantalla.style.width = ancho + "px"
pantalla.style.height = altura + "px"
let altoAncho2 = document.getElementById("altoAncho")
let texto = document.getElementById("texto1")
//pantalla.style.innertext = texto 
pantalla.style.background = color 

pantallaAltoAncho.innerText = `Ancho: ${ancho}px - Altura: ${altura}px`
pantallaTexto.innerHTML = texto.value
}
miformulario.addEventListener(nombreEvento, accionEvento)
