// Taller 1: Fundamentos de JavaScript
// Este script contiene ejercicios básicos de JavaScript para practicar conceptos fundamentales.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ejercicio 1: Variables y tipos de datos
/*
 * Muestra en consola los valores de tres variables: nombre, edad e inscrito.
 * Las variables son:
 * - nombre: string que contiene el nombre del estudiante.
 * - edad: número que contiene la edad del estudiante.
 * - inscrito: boolean que indica si el estudiante se encuentra inscrito o no.
 */
function ejercicio1() {
  const nombre = "Eloy González";
  const edad = 38;
  const inscrito = true;
  console.log(`\nEjercicio 1: Variables y tipos de datos`);
  console.log(`\nNombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Inscrito: ${inscrito}\n`);
}

// Ejercicio 2: Operadores matemáticos
/*
 * Muestra en consola los resultados de las operaciones matemáticas básicas
 * entre dos números.
 * Las operaciones son:
 * - Suma: a + b
 * - Resta: a - b
 * - Multiplicación: a * b
 * - División: a / b
 * - Residuo: a % b
 */
function ejercicio2() {
  const a = 10;
  const b = 3;
  console.log(`\nEjercicio 2: Operadores matemáticos`);
  console.log(`\nSuma: ${a + b}`);
  console.log(`Resta: ${a - b}`);
  console.log(`Multiplicación: ${a * b}`);
  console.log(`División: ${a / b}`);
  console.log(`Residuo: ${a % b}\n`);
}

// Ejercicio 3: Operadores de comparación
/*
 * Muestra en consola los resultados de las operaciones de comparación
 * entre dos números.
 *
 * Las operaciones son:
 * - Igualdad: x === y
 * - Mayor que: x > y
 * - Distinto: x !== y
 */
function ejercicio3() {
  const x = 10, y = 3;
    
  console.log(`\nEjercicio 3: Operadores de comparación`);
  console.log(`\n¿Son iguales? ${x === y}`);
  console.log(`${x} > ${y}? ${x > y}`);
  console.log(`¿Son distintos? ${x !== y}\n`);
}

// Ejercicio 4: Condicionales
/*
 * Muestra en consola los resultados de evaluar un número.
 *
 * La función evaluarNumero utiliza condicionales para determinar
 * si un número es positivo, negativo o cero.
 */
function ejercicio4() {
  function evaluarNumero(n) {
    if (n > 0) return "El número es positivo.";
    if (n < 0) return "El número es negativo.";
    return "El número es cero.";
  }
  console.log(`\nEjercicio 4: Condicionales`);
  console.log(`\n5 => ${evaluarNumero(5)}`);
  console.log(`-2 => ${evaluarNumero(-2)}`);
  console.log(`0 => ${evaluarNumero(0)}\n`);
}

// Ejercicio 5: Funciones
/*
 * Muestra en consola el promedio de dos números dados.
 *
 * Utiliza una función auxiliar para calcular el promedio de dos números.
 */
function ejercicio5() {
  function calcularPromedio(a, b) {
    return (a + b) / 2;
  }
  
  console.log(`\nEjercicio 5: Funciones`);
  console.log(`\nPromedio de 8 y 6: ${calcularPromedio(8, 6)}\n`);
}

// Ejercicio 6: Arrays
/*
 * Muestra en consola el array completo, la primera y la última fruta
 * de un array de strings.
 */
function ejercicio6() {
  const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"];
  console.log(`\nEjercicio 6: Arrays`);
  console.log(`\nArray completo: ${frutas}`);
  console.log(`Primera fruta: ${frutas[0]}`);
  console.log(`Última fruta: ${frutas[frutas.length - 1]}\n`);
}

// Ejercicio 7: Métodos de arrays
/*
 * Muestra en consola el uso de métodos de arrays:
 * - push: Agrega un elemento al final del array.
 * - pop: Elimina el último elemento del array y lo devuelve.
 * - map: Transforma cada elemento del array en otro valor.
 * - filter: Filtra los elementos del array según una condición.
 */
function ejercicio7() {
  let frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"];
  frutas.push("Kiwi");

  console.log(`\nEjercicio 7: Métodos de arrays`);

  console.log(`\nDespués de push: ${frutas}`);
  const removed = frutas.pop();
  console.log(`Elemento pop: ${removed}`);
  console.log(`Después de pop: ${frutas}`);
  const mayus = frutas.map(f => f.toUpperCase());
  console.log(`Map toUpperCase: ${mayus}`);
  const filtradas = frutas.filter(f => /a/i.test(f));
  console.log(`Filter con 'a': ${filtradas}\n`);
}

// Ejercicio 8: Objetos y método de objeto
/*
 * Crea un objeto estudiante con atributos nombre, edad, carrera y semestre.
 * Agrega un método saludar que muestra un mensaje de saludo.
 *
 * Luego, muestra el objeto estudiante en consola y llama al método saludar.
 */
function ejercicio8() {
  const estudiante = {
    nombre: "Eloy González",
    edad: 21,
    carrera: "Ingeniería de Sistemas",
    semestre: 6,
    saludar() {
      console.log(`Hola, soy ${this.nombre} y estudio ${this.carrera}.`);
    }
  };
  
  console.log(`\nEjercicio 8: Objetos y método de objeto`);
  console.log(`\nObjeto estudiante:`, estudiante);
  estudiante.saludar();
  console.log();
}

// Ejercicio 9: Destructuring
/*
 * Desestructura un objeto estudiante en sus atributos nombre y carrera,
 * y muestra en consola el valor de cada uno.
 */
function ejercicio9() {
  const estudiante = { nombre: "Eloy González", carrera: "Ingeniería de Sistemas" };
  const { nombre, carrera } = estudiante;

  console.log(`\nEjercicio 9: Destructuring`);
  console.log(`\nDestructuring - Nombre: ${nombre}`);
  console.log(`Destructuring - Carrera: ${carrera}\n`);
}

// Ejercicio 10: Spread Operator
/*
 * Combina dos arrays en uno solo con Spread Operator.
 */
function ejercicio10() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinado = [...arr1, ...arr2];
  
  console.log(`\nEjercicio 10: Spread Operator`);
  console.log(`\nArray combinado: ${combinado}\n`);
}

// Ejercicio 11: Math.random() y String methods
/*
 * Genera un número aleatorio entre 1 y 100, y muestra en consola
 * el valor generado y el resultado de aplicar los métodos
 * toUpperCase() y slice(0,4) a un string "hola mundo".
 */
function ejercicio11() {
  const aleatorio = Math.floor(Math.random() * 100) + 1;
  const texto = "hola mundo";
  
  console.log(`\nEjercicio 11: Math.random() y String methods`);
  console.log(`\nAleatorio (1-100): ${aleatorio}`);
  console.log(`ToUpperCase: ${texto.toUpperCase()}`);
  console.log(`Slice(0,4): ${texto.slice(0,4)}\n`);
}


// Mostrar menú
function mostrarMenu() {
  console.log("\n\nSeleccione un ejercicio para ejecutar:");
  console.log("1. Variables y tipos de datos");
  console.log("2. Operadores matemáticos");
  console.log("3. Operadores de comparación");
  console.log("4. Condicionales");
  console.log("5. Funciones");
  console.log("6. Arrays");
  console.log("7. Métodos de arrays");
  console.log("8. Objetos y método");
  console.log("9. Destructuring");
  console.log("10. Spread Operator");
  console.log("11. Math & String methods");
  console.log("0. Salir\n");
  rl.question("Opción: ", opcion => {
    switch (opcion) {
      case '1': ejercicio1(); break;
      case '2': ejercicio2(); break;
      case '3': ejercicio3(); break;
      case '4': ejercicio4(); break;
      case '5': ejercicio5(); break;
      case '6': ejercicio6(); break;
      case '7': ejercicio7(); break;
      case '8': ejercicio8(); break;
      case '9': ejercicio9(); break;
      case '10': ejercicio10(); break;
      case '11': ejercicio11(); break;
      case '0': console.log("¡Hasta luego!"); rl.close(); return;
      default: console.log("\nOpción no válida. Intente de nuevo.\n");
    }
    // Volver al menú tras ejecutar
    rl.question("\nPresione Enter para volver al menú...", () => {
      console.clear();
      mostrarMenu();
    });
  });
}

// Iniciar
console.clear();
mostrarMenu();