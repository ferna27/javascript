//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const prompt = require ("prompt");

prompt.start ();
console.log("Ingrese los numero a sumar");

prompt.get (["valor1","valor2"],function(error,res){
    
let resultado = parseInt (res.valor1) + parseInt (res.valor2);

console.log("El resultado es:" + resultado);

});

