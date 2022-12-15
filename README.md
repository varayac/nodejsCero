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

---

⌨️ con ❤️ por [varayac](https://github.com/varayac) 😊
