// EHERCICIO 3: FUNCION QUE RECIBA 2 ENTEROS INICIO Y FIN Y DEVUELVE UNA LISTA DE PARES DE NUMEROS PRIMO GEMELOS DENTRO DEL RANGO

// EXPLICACIÓN: La función recibe dos números enteros (inicio y fin)
// y devuelve una lista de pares de números primos gemelos dentro de dicho rango.
// Un par de primos gemelos es una pareja de la forma (p, p + 2) donde ambos números son primos.
// La función asegura que todo el par pertenezca estrictamente al rango [inicio, fin].
// Si no se encuentra ninguna pareja en el rango o si inicio > fin, la función devuelve 0.

function esPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function primosGemelos(inicio, fin) {
    const parejas = [];
    for (let i = inicio; i <= fin - 2; i++) {
        if (esPrimo(i) && esPrimo(i + 2)) {
            parejas.push([i, i + 2]);
        }
    }
    return parejas.length > 0 ? parejas : 0;
}

// Pruebas
console.log(primosGemelos(0, 10));
console.log(primosGemelos(100, 150));
console.log(primosGemelos(700, 800));
