
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
