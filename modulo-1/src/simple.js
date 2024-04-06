
// Variables
// const name = "Esteban";
// const age = 21;
// const MAX_AGE = 18;

// const isTrue1 = true || false; // true
// const isTrue2 = true && false; // false
// const isTrue3 = isTrue1 && isTrue2; // false
// const isTrue4 = isTrue1 || isTrue2; // true
// const isTrue5 = 1 > 2; // false
// const isTrue6 = age > MAX_AGE; // false

// if (age < MAX_AGE) {
//   console.log('Bloque 1 ejecutado.')
// } else {
//   console.log('Bloque 2 ejecutado.')
// }

// Loops => bucles
// Example 1: Mostrar los números del 1 - 500, de 5 en 5
// for (let number = 0; number <= 500; number = number + 5) {
//   console.log(number);
// }
// Prueba de escritorio
// 1 -> Define la variable "number", con el valor "1"
// 2 -> Evalua la condicion "number <= 10"
// 3 -> Si es TRUE: Ejectua el bloque de codigo, 
//      y luego incrementa la variable "number"
// 3 -> Si es FALSE: Termina la ejecucion del loop

// Funciones
// function verifyStartNumberFromZero(startNumber) {
//   if (startNumber === 0) {
//     console.log("Start Number from zero.")
//   }
// }

// function loop(startNumber, maxNumber, increment) {
//   for (let number = startNumber; number <= maxNumber; number = number + increment) {
//     console.log(number);
//   }

//   verifyStartNumberFromZero(startNumber)
// }

// loop(0, 10, 1);


// Prueba de Escritorio
// 1. Definie funcion "loop", con todo lo que tiene.



export function add(a, b) {
  return a + b;
}

export function substract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}