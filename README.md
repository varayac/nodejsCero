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

## Respuestas:

### Modulo 1 - Introduccion a JS:

1. Crea un nuevo proyecto de Node, y dentro del package.json crea un script que muestre por pantalla "Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo".

**_Ejecute:_**

```
pnpm run hello
```

_**Respuesta:**_

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

_**Respuesta:**_

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

_**Respuesta:**_

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

_**Respuesta:**_

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

_**Respuesta:**_

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

### Modulo 4 - Cadenas de texto.

Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

_**Respuestas:**_

```JS
const name = 'John'
const lname = 'Doe'

const student = `${name} ${lname}`          // John Doe
const upperStudent = student.toUpperCase()  // JOHN DOE
const lowerStudent = student.toLowerCase()  // john doe
const countLengthStudent = student.length   // 8
const firstCharName = name.charAt(0)        // J
const lastCharLname = lname.slice(-1)       // e
const removeSpaceStudent = student.replace(/\s+/g, '') // JohnDoe
const searchName = student.includes("John") // true
```

---

⌨️ con ❤️ por [varayac](https://github.com/varayac) 😊
