let nombre = "Agustin";
let edad = 22;
let profesor = false;
edad += 1;
const PI = 3.14;
// PI += 1; devuelve error
console.log(PI);
const ARRAY1 = [];
ARRAY1.push("a");
console.log(ARRAY1);
// array se crea en constante en mayuscula total lo puedo modificar.

let alumno = {
    nombre: 'Agustin',
    apellido: 'Vaserman',
    edad: 22,
    deuda: false
}
console.log(alumno.nombre)

let alumno2 = {
    nombre: 'Sofia',
    apellido: 'Quintero',
    edad: 21,
    deuda: false
}

const CLASE = [alumno, alumno2]

console.log(CLASE)

console.log(CLASE[1].apellido)

console.table(CLASE)

console.log("1"+1) //muestra 11
console.log('2'-1) // muestra 1
console.log('hola'-1) // muestra NaN Not a Number

console.log("2" == 2) // muestra true igualdad debil, compara solo el valor 
console.log("2" === 2) // muestra false igualdad fuerte, compara tambien el tipo de dato
console.log("2" != 2) // muestra false desigualdad debil, compara solo el valor 
console.log("2" !== 2) // muestra true desigualdad fuerte, compara tambien el tipo de dato

console.log("perro" && "gato") // devuelve gato, necesita llegar al final y printea el ultimo
console.log("perro" || "gato") // devuelve perro, porque ya en el primer valor es true y se queda ahi

// Parsear datos (cast)

console.log(typeof(Number("2")))
let num = 2
console.log(typeof(String(num)))