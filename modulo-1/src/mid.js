export function fizzBuzz(num) {
    if (num % 3 === 0 || num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else {
        return num;
    }
}

export function esPalindromo(palabra) {
    const reversed = palabra.split("").join("");
    return palabra === reversed;
}

export function factorial(n) {
    return n * factorial(n - 1);
}

export function sumaArray(array) {
    return array[0] + array[1] + array[3] + array[4] + array[5];
}

export function contarVocales(texto) {
    const vocales = texto.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
}