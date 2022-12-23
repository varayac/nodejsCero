// Calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10
const num2 = num
let factorial = 1

while (num) {
  factorial = factorial * num
  num--

  if (num < 1) {
    console.log(`El factorial de ${num2} es ${factorial}`)
    break
  }
}
