// Ejercicio 1
function maxTres(num1,num2,num3){
    if (num1>=num2 && num1>=num3){
        return num1
    } else if (num2>=num1 && num2>=num3){
        return num2
    } else{
        return num3
    }
}

console.log(maxTres(1,2,3))
console.log(maxTres(3,2,1))
console.log(maxTres(4,7,6))


// Ejercicio 2
let concatEsp = function(ARRAY){
    let result = ""
    for (let i = 0 ; i < ARRAY.length ; i++){
        result += `${ARRAY[i]} `
    }
    return result
}

console.log(concatEsp(['hola','como','estas']))


// Ejercicio 3
let concatEspFle = ARRAY => {
    let result = ""
    for (let i = 0 ; i < ARRAY.length ; i++){
        result += `${ARRAY[i]} `
    }
    return result
}

console.log(concatEspFle(['hola','como','estas']))


// Ejercicio 4
temp = function(temperatura){
    if (temperatura < 15){
        return 'frio'
    } else if(temperatura <25){
        return 'templado'
    } else{
        return 'calor'
    }
}

console.log(temp(17))


// Ejercicio 5 
hora = 12
let saludo = hora < 12 ? 'Buenos dias' : hora < 18 ? 'Buenas tardes' : 'Buenas noches'
console.log(saludo)

// Ejercicio 6
cuatroBools = function(b1,b2,b3,b4){
    return (b1||b2)&&!(b3||b4)
}
console.log(cuatroBools(1,1,0,0))


// Ejercicio 7
function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
}

  console.log(factorial(5)); // 120


// Ejercicio 8
function saludoinv(nombre=null){
    if(nombre){
        return `hola ${nombre}`
    } else{
        return 'hola invitado'
    }
}

console.log(saludoinv())
console.log(saludoinv('Agustin'))


// Ejercicio 9
function ispar(num){
    if(num%2 == 0){
        return true
    } else{
        return false
    }
}

console.log(ispar(2))
console.log(ispar('h'))

//Ejercicio 10
function obtenerDiaSemana(numero) {
    let nombreDia;
    switch (numero) {
        case 1:
        nombreDia = "Lunes";
        break;
        case 2:
        nombreDia = "Martes";
        break;
        case 3:
        nombreDia = "Miércoles";
        break;
        case 4:
        nombreDia = "Jueves";
        break;
        case 5:
        nombreDia = "Viernes";
        break;
        case 6:
        nombreDia = "Sábado";
        break;
        case 7:
        nombreDia = "Domingo";
        break;
        default:
        nombreDia = "Número inválido (use 1-7)";
    }
    return nombreDia;
}

  // Ejemplo de uso:
  console.log(obtenerDiaSemana(1)); // Lunes
  console.log(obtenerDiaSemana(7)); // Domingo
  console.log(obtenerDiaSemana(9)); // Número inválido (use 1-7)



// Ejercicio 11
function sumrec(num){
    if(num == 1){
        return num
    } else if(num < 1){
        return "debe ser un numero mayor a 1"
    } else{
        return num + sumrec(num-1)
    }
}

console.log(sumrec(3))

// Ejercicio 12