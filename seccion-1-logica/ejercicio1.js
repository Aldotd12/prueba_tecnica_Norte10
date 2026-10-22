// EJERCICIO 1: INVERTIR LAS PALABRAS DE UNA FRASE

// EXPLICACION: La función invertirTexto toma una cadena de texto como
// entrada y devuelve una nueva cadena en la que cada palabra de la frase
// original está invertida, pero el orden de las palabras se mantiene igual.
// USO DE .SPLIT y .JOIN para invertir las palabras de una frase de texto
// EL SPLIT devuelve un arreglo de cadenas de texto, cada una de las palabras
// de la frase original. EL JOIN devuelve una cadena de texto con las palabras
// invertidas, separadas por espacios.


function invertirTexto(texto) {
    return texto.split(' ').map(frase => frase.split('').reverse().join('')).join(' ');
}

console.log(invertirTexto('Hola soy una cadena'));
console.log(invertirTexto('Programando ando'));
console.log(invertirTexto('Concatenacion'));