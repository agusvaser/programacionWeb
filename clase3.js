// funcion expresada

console.log(saludar('Agustin')) //funciona igual aunque sea llamada la funcion antesnque declarada
function saludar(nombre){
    return 'Hola '+nombre
}
console.log(saludar('Agustin'))

// funcion declarada
//console.log(sumar(1,3)) esto tira error porque lo guardaste en una variable la funcion.d
let sumar = function(num1,num2){
    return num1 + num2
}
console.log(sumar(1,3))

// funcion flecha 
let multiplicar = (num1,num2) => num1*num2 // sintaxis simplificada, si la funcion tiene solo una linea no hace falta poner return
console.log(multiplicar(2,3))

// estructura if
let a = 1
let b = 2
if (a<b){
    console.log('a es menor que b')
} else  if (a==b){
    console.log("a es igual que b")
} else {
    console.log(`${a} es mayor que ${b}`)
} 

// if ternario (operador ternario)

//let resta = a<b ? 'es menor':'no es menor'
let resta = a<b ? 'es menor':a==b?'es igual':'no es menor'
console.log(resta)


// estructura for for(variable de control ; condition ; variacion)

for (let i = 0; i<10;i++){
    console.log(i)
}
let nombre = "Esteban"
for (let i = 0; i<nombre.length;i++){
    console.log(nombre[i])
}
const ARRAY = [1,2,3]
for (let i = 0; i<ARRAY.length;i++){
    console.log(ARRAY[i])
}

const ALUMNOS = [
    {nombre: 'Pilar'},
    {nombre: 'Agustin'}
]
for (let i = 0 ; i < ALUMNOS.length ; i++){
    console.log(ALUMNOS[i].nombre)
}


// Input 

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? '); // se corre desde la terminal y se pone node nombreArchivo.js

console.log(n)