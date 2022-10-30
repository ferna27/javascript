// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.

const prompt = require ("prompt");

prompt.start ();
console.log("Introzca un nombre ");

prompt.get (['nombre'],function(error,resultado){

    console.log('hola nombre usuario' + " " + resultado.nombre);

});