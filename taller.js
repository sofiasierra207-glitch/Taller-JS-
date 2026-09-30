/* Ejercicio 1.1

var nom = "Anny";

nom = "Cami";
console.log(nom);

// Ejercicio 1.2

const nom = "Anny";
console.log(nom);

//Da error porque no se puede reasignar un valor a una constante.

// Ejercicio 1.3

if (false) {
    let num = 25;
}
console.log(num); // Da error porque la variable num está declarada dentro del bloque if y no es accesible fuera de él.

//Punto 2 - Ejercicio 2.1

const string = "Soy Anny";
console.log(typeof string);

const num = 25;
console.log(typeof num);

let bool = true;
console.log(typeof bool);

const nulls = null;
console.log(typeof nulls);

let unde;
console.log(typeof unde);

//Punto 2 - Ejercicio 2.2

const pers = {
    nom: "Anny",
    edad: 19,
    hobbies: ["leer", "ver series", "estar con amigos"],
};
console.log(typeof pers);
console.log(Array.isArray(pers.hobbies)); 
// El objeto es un object y tiene tres diferentes tipos de datos que son string, number y array. 

//Punto 3 - Ejercicio 3.1

const num1 = 10;
const num2 = "5";
console.log(num1 + num2); // Suma las variables dando como resultado 105 ya que paso el valor del string a un numero, porque el prioriza la concatenación de strings.
console.log(num1 * num2); // Multiplica las variables dando como resultado 50 ya que el operador * convierte el string en un número para poder realizar la operación.

//Punto 3 - Ejercicio 3.2

const numero = 10;
const cadena = String(numero);
console.log(typeof cadena); // "string"

const numero2 = "100";
const numeroResultado= Number(numero2);
console.log(typeof numeroResultado); // "number"

const bool1 = "";
const bool2 = "Hola";
// Convirtir a booleano
const boolResult1 = Boolean(bool1);
const boolResult2 = Boolean(bool2);
console.log(typeof boolResult1); // "boolean"
console.log(typeof boolResult2); // "boolean"*/

//Punto 4 - Ejercicio 4.1

console.log ( 10 == "10");
console.log ( 10 === "10");
// La diferencia entre el primero y el segundo es que el primero solo compara el valor y el segundo compara el valor y el tipo de dato.
