import { fizzBuzz, esPalindromo, contarVocales, sumaArray, factorial } from '../src/mid';

describe("FizzBuzz", () => {
    test("Divisible por 3", () => {
        expect(fizzBuzz(9)).toBe("Fizz");
    });
    test("Divisible por 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    test("Divisible por 3 y 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    test("No divisible por 3 ni 5", () => {
        expect(fizzBuzz(7)).toBe(7);
    });
});

describe("esPalindromo", () => {
    test("Palabra palíndromo", () => {
        expect(esPalindromo("reconocer")).toBe(true);
    });
    test("Palabra no palíndromo", () => {
        expect(esPalindromo("hola")).toBe(false);
    });
});

describe("factorial", () => {
    test("Factorial de 5", () => {
        expect(factorial(5)).toBe(120);
    });
    test("Factorial de 0", () => {
        expect(factorial(0)).toBe(1);
    });
});

describe("sumaArray", () => {
    test("Suma de elementos", () => {
        expect(sumaArray([1, 2, 3, 4])).toBe(10);
    });
});

describe("contarVocales", () => {
    test("Contar vocales en 'Hola mundo'", () => {
        expect(contarVocales("Hola mundo")).toBe(4);
    });
});