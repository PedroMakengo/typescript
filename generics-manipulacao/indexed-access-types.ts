import { publication1 } from './data'
import { Publication } from './models'

const author = publication1['author']

console.log(author)

type Author = Publication['author']

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
]

// Extraindo a minha nova interface apartir da MyArray
type Person = (typeof MyArray)[number]

const person: Person = {
  name: 'Lucas',
  age: 34,
}
