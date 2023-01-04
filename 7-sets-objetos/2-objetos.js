const myPersonalData = {
  name: 'John',
  lname: 'Doe',
  age: 32,
  heigth: 1.74,
  developer: true,
}

const myAge = myPersonalData.age // 32

const meAndFriendsDataList = [
  myPersonalData,
  {
    name: 'Mariom',
    lname: 'Doe',
    age: 36,
    heigth: 1.77,
    developer: true,
  },
  {
    name: 'Nacho',
    lname: 'Doe',
    age: 27,
    heigth: 1.82,
    developer: false,
  },
]

const orderByAge = meAndFriendsDataList.sort((a, b) => b.age - a.age) // ...36 ...32 ...27
