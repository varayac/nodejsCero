const today = new Date() // 2023-01-04
const birthday = new Date('12 marzo 1990') // 1990-03-12...
const compareTodayAndBirthday = today.getTime() > birthday.getTime() // true
const dayBirthday = birthday.getDate() // 12
const monthBirthday = birthday.getMonth() // 2 (monts: 0 - 11)
const yearBirthday = birthday.getFullYear() // 1990
