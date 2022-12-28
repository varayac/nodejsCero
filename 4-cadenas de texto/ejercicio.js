const name = 'John'
const lname = 'Doe'

const student = `${name} ${lname}`
const upperStudent = student.toUpperCase()
const lowerStudent = student.toLowerCase()
const countLengthStudent = student.length
const firstCharName = name.charAt(0)
const lastCharLname = lname.slice(-1)
const removeSpaceStudent = student.replace(/\s+/g, '')
const searchName = student.includes('John')

console.log()
