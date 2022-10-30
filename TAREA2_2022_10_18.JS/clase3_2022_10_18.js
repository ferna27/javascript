// Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.

const prompt = require ("prompt");

prompt.start ();
console.log("Introduzca una frase");

prompt.get (["frase"],(err,res)=>{
const {frase} = res;

let vocales = 0;
for (let i = 0; i < frase.length;i++){
    if (frase[i] == "a"){
        vocales++
    }else if (frase[i] == "e"){
        vocales++
    }else if (frase[i] == "i"){
        vocales++
    }else if (frase[i] == "o"){
        vocales++
    }else if (frase[i] == "u"){
        vocales++
    }
}

console.log(`la frase contiene ${vocales} vocales.`);

})