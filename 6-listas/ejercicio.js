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
