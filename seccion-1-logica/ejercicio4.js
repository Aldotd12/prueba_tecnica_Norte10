// EJERCICIO 4: FUNCION QUE RECIBA UN ARREGLO DE ENTEROS Y UN NUMERO OBJETIVO,
// Y DETERMINE SI EXISTE ALGUNA COMBINACION DE ELEMENTOS (SIN REPETIR VALORES) CUYA SUMA SEA IGUAL A EL OBJETIVO


// EXPLICACION: La función existeCombinacion toma un arreglo de números como
// entrada y un número objetivo, y devuelve verdadero si existe una combinación
// de elementos del arreglo que sumen a ese objetivo, y falso en caso contrario.
// La función utiliza un conjunto para almacenar las sumas de los elementos del arreglo.
// La función itera sobre cada elemento del arreglo, y para cada elemento, crea un nuevo conjunto
// que contenga las sumas de los elementos que ya se han considerado. Luego, itera sobre los conjuntos
// que contienen las sumas de los elementos que ya se han considerado, y para cada conjunto, verifica
// si la suma del elemento actual es igual al objetivo. Si se encuentra una combinación de elementos que sumen
// al objetivo, la función devuelve verdadero. Si no se encuentra ninguna combinación, la función devuelve falso.

function existeCombinacion(numeros, objetivo){
    let sumas = new Set([0]);
    for (const num of numeros){
        const nuevaSuma = new Set(sumas);
        for (const suma of sumas){
            if (suma+ num === objetivo) return true;
            if (suma + num < objetivo) nuevaSuma.add(suma + num);
        }
        sumas = nuevaSuma;
    }
    return false;
}

console.log(existeCombinacion([1, 2, 3, 4, 5], 10));
console.log(existeCombinacion([55, 3, 8, 11, 45, 1], 12));
console.log(existeCombinacion([4, 8, 48, 44, 1], 11));