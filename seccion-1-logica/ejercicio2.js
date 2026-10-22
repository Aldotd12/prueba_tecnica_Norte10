// EJERCICIO 2: FUNCION QUE RECIBA UN ARREGLO DE NUMEROS Y RETORNE UN NUEVO ARREGLO CONTENIENDO SOLO LOS NUMEROS PARES UNICOS

// EXPLICACION: La función filtrarParesUnicos toma un arreglo de números como
// entrada y devuelve un nuevo arreglo que contiene solo los números pares
// únicos del arreglo original. Se utiliza el método .filter para filtrar los
// números pares y el método .indexOf para asegurarse de que solo se incluyan
// los números únicos en el nuevo arreglo.
// el método .indexOf devuelve el índice de la primera coincidencia de un valor
// en un arreglo. Si no hay coincidencias, devuelve -1.

function obtenerPares(arreglo){
    return arreglo.filter((numero, index) => numero % 2 === 0 && arreglo.indexOf(numero) === index);
}

console.log(obtenerPares([2,7,9,12,33,15,22,12,4]));
console.log(obtenerPares([1,2,3,4,5,6,7,2,4,6,8,6]));
