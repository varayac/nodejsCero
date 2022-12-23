// Calcular el factorial de 10 utilizando un solo bucle for

const num = 10
let factorial = 1

for (let i = num; i > 0; i--) {
  factorial = factorial * i
}

console.log(`El factorial de ${num} es ${factorial}`)
