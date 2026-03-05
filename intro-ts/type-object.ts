// type Person = { firstName: string; lastName: string }
interface Person {
  firstName: string
  lastName: string
}

interface User extends Person {
  email: string
}

// É mais performático utilizar o interface em vez de type

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`
}

const person: Person = {
  firstName: 'Lucas',
  lastName: 'Garcez',
}

const fullName = getFullName(person)

console.log(fullName)
