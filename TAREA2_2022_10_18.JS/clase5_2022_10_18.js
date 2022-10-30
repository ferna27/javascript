// Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible).

const prompt = require ("prompt");

prompt.start ();
console.log("ingrese  un valor");

prompt.get (["valor"],function(error,resultado){

const {valor} = resultado;

let n1 = 0;

if (valor % 2 === 0 || valor % 3 === 0 || valor % 5 === 0 || valor % 7 === 0){

    if (valor % 2 === 0){
        console.log("es divisible por 2 ");
    }if (valor % 3 === 0){
        console.log("es divisible por 3 ");
    }if (valor % 5 === 0){
        console.log("es divisible por 5 ");
    }if (valor % 7 === 0){
        console.log("es divisible por 7 ");
    }else{
        console.log("no es divisible ni por 2,ni por 3,ni por 5, ni por 7");
    }
}

});