let ciudad = 'bsas'
let pais = 'argentina'
const edad = 0
console.log(ciudad, pais, edad)

ciudad = 'rio'
pais = 'brasil'
// edad = 7 esto tira error porque es una const que no permite cambiar el valor
console.log(ciudad, pais, edad)


// Ejercicio 2
let num1 = 5
let num2 = 3
let num3 = 7
let prom = (num1+num2+num3)/3
console.log(prom)
console.log((num1+num3)/num2)
console.log((num1+num3)%num2)


//Ejercicio 3
let coche = {
    marca: 'BMW',
    modelo: '135i',
    año: 2017
}

for (const value of Object.values(coche)){
    console.log(typeof(value))
}


// Ejercicio 4
const ARRAY1 = ['Paris','Londres','Tokyo','Shangai','Buenos Aires']
ARRAY1[2] = 'Itamambuca'
console.log(ARRAY1)


// Ejercicio 5
let peli1 = {
    titulo: 'hola mundo',
    año: 2019,
    director: 'Alfredo'
}
let peli2 = {
    titulo: 'chau mundo',
    año: 2017,
    director: 'Marcos'
}
let peli3 = {
    titulo: 'buenas mundo',
    año: 2018,
    director: 'Tomas'
}
const ARRAY2 = [peli1, peli2, peli3]
console.log(ARRAY2[2].director)


// Ejecricio 6
let first = false
let second = true
let third = false
let result = (first + second + third ) >= 2
console.log(result)


// Ejercicio 8 (no hay 7)
let nombre = 'Agustin'
let apellido = 'Vaserman'
let nombreCompleto = nombre+apellido
console.log(nombreCompleto)


// Ejercicio 9
let numero = 8
numero++
console.log(numero)
numero--
console.log(numero)


// Ejercicio 13 (pasa directo) 
let notval
console.log(typeof(notval))
let withNull = null
console.log(typeof(withNull))


// Ejercicio 14
let strnum = '123'
strnum = Number(strnum)
console.log(typeof(strnum))
console.log(2 + strnum)