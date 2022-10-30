// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

const prompt = require ("prompt");

prompt.start ();
console.log("ingresa un numero");

prompt.get (["valor"],function(error,resultado){

    const {valor} = resultado;

    let n1 = 0;

    if (valor % 2 === 0 || valor % 3 === 0 || valor  % 5 === 0 || valor % 7 === 0){
        console.log("es divisible por 2,3,5 o 7");
    }else{
        console.log("no es divisble ni por 2,ni por 3,ni por 5,ni por 7");
    }


});