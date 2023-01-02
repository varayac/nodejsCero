/*
const arr1 = [1, 'pdfg', undefined, null, true, { id: 1 }, 21.2]
// push y unshift agregan y mutan el array
// pop y shift eliminan y mutan el array

// Método para editar array .splice(indiceStart, indiceMod, NewValue):
const arr2 = [1, 2, 3, 4, 5]
arr2.splice(1, 1, 'intro')
console.log(arr2)

// Unir Arrays con concat(), no muta los arrays.
const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
// const arrC = arrA.concat(arrB)

// Unir con factor de propagacion ...
const arrC = [...arrA, ...arrB]
console.log(arrC)

// .slice(start, end) obtener un array de otro array, no muta el array original.
const arr = [1, 2, 3, 4, 5, 6]
const arrSlice = arr.slice(1, 3)
const arrSlice2 = arr.slice(1, -1)
console.log(arrSlice)
*/

/*
// ITERAR VALORES E6
// forEach
const nums = [1, 20, 33, 7, 90, 55, 21, 3, 5]

let suma = 0
nums.forEach(item => {
  suma += item
})

console.log(suma)

// .find()
const arr1 = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco']
const ress = arr1.find(value => value === 'Tres')
console.log(ress)

const arr2 = [
  { name: 'John Doe', age: 33 },
  { name: 'Travis Algo', age: 43 },
  { name: 'Richard Achfol', age: 54 },
  { name: 'El Viss', age: 32 },
]

// deconstruccion
const { name, age } = arr2.find(obj => obj.name === 'John Doe')
console.log(name, age)
*/

/*
// METODOS AVANZADOS
// .map() .filter() .reduce()
const arrCity = ['Calama', 'Santiago', 'Iquique', 'Nancagua']
const indexValue = arrCity.map((city, index) => `${index + 1}- ${city}`)
console.log(indexValue)

const users = [
  { id: 'u1', name: 'John Doe', age: 33 },
  { id: 'u2', name: 'Travis Algo', age: 43 },
  { id: 'u3', name: 'Richard Achfol', age: 54 },
  { id: 'u4', name: 'El Viss', age: 32 },
  { id: 'u5', name: 'Franco Coulum', age: 24 },
  { id: 'u6', name: 'Tapis Cry', age: 13 },
]

const oldMans = users.filter(user => user.age > 18)
console.log(oldMans)

// .reduce(acumulado, actual, indice, arrayOriginal)
const nums = [1, 32, 44, 12, 23, 43, 54, 66]

const suma = nums.reduce((acu, act, index, array) => {
  console.log(`acu: ${acu}`)
  console.log(`act: ${act}`)
  console.log(`index: ${index}`)
  console.log(`array: ${array}`)
  return acu + act
})
console.log(`SUMA: ${suma}`)
*/

/*
// ORDENAR Y COMPARAR LISTAS: .sort()
const nums = [2, 4, 5, 7, 3, 6, 9, 8, 1]

const orderNums = nums.sort((a, b) => b - a)
console.log(orderNums)

// Oredenar usuarios por edad
const users = [
  { id: 'u1', name: 'John Doe', age: 33 },
  { id: 'u2', name: 'Travis Algo', age: 43 },
  { id: 'u3', name: 'Richard Achfol', age: 54 },
  { id: 'u4', name: 'El Viss', age: 32 },
  { id: 'u5', name: 'Franco Coulum', age: 24 },
  { id: 'u6', name: 'Tapis Cry', age: 13 },
]

const ageUser = users.sort((a, b) => a.age - b.age)
console.log(ageUser)
*/

/*
// COMPARAR LISTAS .every()
const nums = [1, 2, 3, 4, 5, -1, -2, -4, -6, -7]
const comp = nums.every(num => num > 0)
console.log(comp)

// comparar, ver si todos los metdos de las listas cumplen la condicion.
const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [1, 2, 3, 4, 5, 6]

const compareArrays = (arr_1, arr_2) => {
  if (arr_1.length !== arr_2.length) return false
  const res = arr_1.every((value, i) => value === arr_2[i])
  return res
}

console.log(compareArrays(arr1, arr2))
*/

/*
// COMPARAR ALGUNOS ELEMENTOS some()
const users = [
  { id: 'u1', name: 'John Doe', age: 33 },
  { id: 'u2', name: 'Travis Algo', age: 43 },
  { id: 'u3', name: 'Richard Achfol', age: 54 },
  { id: 'u4', name: 'El Viss', age: 32 },
  { id: 'u5', name: 'Franco Coulum', age: 24 },
  { id: 'u6', name: 'Tapis Cry', age: 13 },
]

const getTravis = users.some(user => user.name === 'Travis Algo')
console.log(getTravis)

// OBTENER UN ARRAY DE UN OBJETO ITERABLE (string)
const str = 'Hola soy un Naruto'
const strToArr = Array.from(str)
console.log(strToArr)

// OBTENER INDICES O KEYS de array
const keys = strToArr.keys()
console.log(keys)
const arrKeys = Array.from(keys)
console.log(arrKeys)
 */

const cardList = ['Jamon', 'Queso', 'Pan']
cardList.push('Aceite de Girasol') // [ 'Jamon', 'Queso', 'Pan', 'Aceite de Girasol' ]
cardList.pop('Aceite de Girasol') // ['Jamon', 'Queso', 'Pan']

const moviesList = [
  {
    title: 'Batman the dark knight',
    director: 'Christopher Nolan',
    date: new Date('2008-6-18'),
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    date: new Date('2014-9-26'),
  },
  {
    title: 'Tenki no Ko',
    director: 'Makoto Shinkai',
    date: new Date('2019-6-19'),
  },
]
const date2010 = new Date('2010-1-1').getTime()
const getMovie = moviesList.filter(movie => movie.date.getTime() > date2010)
// [ { title: 'Interstellar',... }, { title: 'Tenki no Ko',... } ]

const getDirectors = moviesList.map(dr => dr.director) // [ 'Christopher Nolan', 'Christopher Nolan', 'Makoto Shinkai' ]
const getTitle = moviesList.map(dr => dr.title) // [ 'Batman the dark knight', 'Interstellar', 'Tenki no Ko' ]
const concatMovie = getDirectors.concat(getTitle) // [ Christopher Nolan', Christopher Nolan', ... ]
const propagationList = [...getDirectors, ...getTitle] // [ Christopher Nolan', Christopher Nolan', ... ]
