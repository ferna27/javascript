// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres

const prompt = require ("prompt");

prompt.start ();
console.log("cual es el mayor de los tres numero");

prompt.get (["valor1","valor2","valor3"],function(error,resultado){
    let valor1 = +resultado.valor1;
    let valor2 = +resultado.valor2;
    let valor3 = +resultado.valor3;

    if (valor1 > valor2){
        console.log("valor1 es mayor que valor2");

    } if (valor1 < valor2){
        console.log("valor1 es menor que valor2");

    }else if (valor1 > valor3);{
        console.log("valor1 es mayor que valor3");3

    }if (valor1 < valor3){
        console.log("valor1 es menor a valor3");

    }if (valor1 === valor2){
        console.log("valor1 es estrictamente igual a valor2");

    }if (valor1 === valor3){
        console.log("valor1 es estrictamente igual a valor2");

    }else{
        console.log("todos podemos ser bueno ");
    }


});