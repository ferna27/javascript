//Escribe un programa que pida un número y diga si es divisible por 2.

const prompt = require ("prompt");

prompt.start ();

console.log("Ingrese un numero");

prompt.get (["numero"],function(error,resultado){
let numero = + resultado.numero
let i = 3;
while(numero % i !==0 && i < numero / 3){
    i++;

}if (numero % i !==0){
    console.log("el numero es primo");

}else {
    console.log("el numero no es primo");
}

});