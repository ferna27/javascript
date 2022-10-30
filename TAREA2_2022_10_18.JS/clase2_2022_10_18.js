// Escribe un programa que pida una frase y escriba las vocales que aparecen.

const prompt = require("prompt");

prompt.start();
console.log("Introduzca una frase");

prompt.get(["contador"], function (error, resultado) {
    const {contador} = resultado;
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    for (let step = 0; step < contador.length; step++) {
        switch (contador[step]) {
            case "a":
                contadorA = contadorA + 1;
                break;
            case "e":
                contadorE = contadorE+ 1;
                break;
            case "i":
                contadorI = contadorI + 1;
                break;
            case "o":
                contadorO = contadorO + 1;
                break;
            case "u":
                contadorU= contadorU + 1;
                break;
        }
     
    }

    console.log("la vocal 'a' aparece:" + contadorA + " veces ");
    console.log("la vocal 'e' aparece:" + contadorE + " veces ");
    console.log("la vocal 'i' aparece:" + contadorI + " veces ");
    console.log("la vocal 'o' aparece:" + contadorO + " veces ");
    console.log("la vocal 'u' aparece:" + contadorU + " veces ");
});
