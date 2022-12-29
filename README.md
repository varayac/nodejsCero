# **Open Bootcamp JavaScript Basico**

Repositorio con respuesta a los ejercicios correspondientes al curso de JavaScript-basico de [OpenBootcamp](https://open-bootcamp.com).

**Indice:**

1. [Primeros Pasos.](#primeros-pasos)
2. [Respuestas de ejercicios.](#respuestas-de-ejercicios)
3. [Modulo 1 - Introducción JS.](#modulo-1---introducción-a-js)
4. [Modulo 2 - Sintaxis, variables, etc.](#modulo-2---sintaxis-variables-etc)
5. [Modulo 3 - Estructuras de control.](#modulo-3---estructuras-de-control)
6. [Modulo 4 - Cadenas de texto.](#modulo-4---cadenas-de-texto)
7. [Modulo 5 - Números en JS.](#modulo-5---números-en-js)
8. [Modulo 6 - Listas. (pendiente)](#modulo-6---listas)
   <br>
   <br>

# Primeros Pasos

## Mi configuracion ⚙️:

- Se utilizo la version 18.12.0 de [NodeJS](https://nodejs.org/en/).
- Se utilizo [PNPM](https://pnpm.io/) como alternativa a NPM.
- Se utilizo [Eslint](https://eslint.org/), [Prettier](https://prettier.io/) y [standardJS](https://standardjs.com/) para el formato del codigo.

---

## Instalación 🚀:

Descargue el repositorio, acceda y ejecute en consola:

```bash
pnpm i
```

<br>
<br>

# Respuestas de ejercicios

<br>

### Modulo 1 - Introducción a JS:

Crea un nuevo proyecto de Node, y dentro del package.json crea un script que muestre por pantalla _"Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo"_.

**_Ejecutar:_**

```
pnpm run hello
```

_**Respuesta:**_

```
Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo
```

<br>

### Modulo 2 - Sintaxis, variables, etc.

Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

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

<br>

### Modulo 3 - Estructuras de control.

Crea los siguientes archivos JS:

1. **factorial-for.js** -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for.

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

2. **factorial-while.js** -> Este archivo debe calcular el factorial de 10 utilizando un bucle while.

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

3. **factorial-break.js** -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

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

<br>

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

<br>

### Modulo 5 - Números en JS.

Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

_**Respuestas:**_

```JS
const heightCM = 175 // 175
const heightMTS = 1.75 // 1.75
const weightKG = 68.8 // 68.8

const heightMtsRounded = Number(heightMTS.toFixed(1)) // 1.80
const weightKgRounded = Math.floor(weightKG) // 68

const maxValueJS = Number.MAX_VALUE // 1.7976931348623157e+308
const maxValueJsAddOne = (Number.MAX_VALUE + 1) //1.7976931348623157e+308
const compare = maxValueJsAddOne === maxValueJS // true
```

<br>

### Modulo 6 - Listas

- 👷🏽‍♂️ _en desarrollo..._ n.n

<br>

---

⌨️ con ❤️ por [varayac](https://github.com/varayac) 😊
