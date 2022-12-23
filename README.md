# Open Bootcamp JavaScript Basico

Repositorio con respuesta a los ejercicios correspondientes al curso de JavaScript-basico de [OpenBootcamp](https://open-bootcamp.com).

## Mi configuracion ⚙️:

- Se utilizo la version 18.12.0 de [NodeJS](https://nodejs.org/en/).
- Se utilizo [PNPM](https://pnpm.io/) como alternativa a NPM.
- Se utilizo [Eslint](https://eslint.org/), [Prettier](https://prettier.io/) y [standardJS](https://standardjs.com/) para el formato del codigo.

---

## Instalación 🚀:

Descargue el repositorio, acceda y ejecute en consola:

```
pnpm i
```

---

## Respuestas :

### Modulo 1 - Introduccion a JS:

1. Crea un nuevo proyecto de Node, y dentro del package.json crea un script que muestre por pantalla "Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo".

_Ejecute:_

```
pnpm run hello
```

_Respuesta:_

```
Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo
```

### Modulo 2 - Sintaxis, variables, etc.

1. Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

_respuesta:_

```javascript
const aboutMe = [
  'varayac',
  33,
  true,
  new Date(1990, 2, 13).toLocaleDateString('en-GB'),
  {
    title: 'The Dark Tower VI: Song of Susannah',
    author: 'Stephen King',
    annio: 2004,
    URL: 'https://tinyurl.com/the-dark-tower',
  },
]

console.log(aboutMe)
```

### Modulo 3 - Estructuras de Control.

Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for.

_respuesta:_

```javascript
const num = 10
let factorial = 1

for (let i = num; i > 0; i--) {
  factorial = factorial * i
}

console.log(`El factorial de ${num} es ${factorial}`)
// 'El factorial de 10 es 3628800'
```

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while.

_respuesta:_

```javascript
let num = 10
let factorial = 1

while (num !== 0) {
  factorial = factorial * num
  num--
}

console.log(`El factorial de 10 es ${factorial}`)
// 'El factorial de 10 es 3628800'
```

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

_respuesta:_

```javascript
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
// 'El factorial de 10 es 3628800'
```

---

⌨️ con ❤️ por [varayac](https://github.com/varayac) 😊
