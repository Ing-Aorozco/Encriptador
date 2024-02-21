
const campo_Texto = document.querySelector("#texto-Encriptado");
const campo_Mensaje = document.querySelector("#campo-Mensaje");

console.log(campo_Mensaje, campo_Texto)
function btnEncriptar() {
    const texto = campo_Texto.Value;
    console.log (texto);
 
 }
const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
   const texto =  encriptar(campo_Texto.value);
   campo_Mensaje.value=texto;
   console.log (texto);

}
function btnDesencriptar() {
    const texto =  desencriptar(campo_Texto.value);
    campo_Mensaje.value=texto;
    console.log (texto);
 
 }
function encriptar(fraseEncriptada) {
    for(let i=0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
 
 }
 function desencriptar(fraseEncriptada) {
    for(let i=0; i<matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseEncriptada;
 
 }
