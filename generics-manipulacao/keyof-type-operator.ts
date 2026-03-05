// keyof (Pegar as chaves da minha tipagem)

import { lucas, publication1 } from './data'
import { User } from './models'

const email = lucas.email

console.log(email)

type UserKey = 'firstName' | 'lastName' | 'email'
function getProperty<T, Key extends keyof T>(value: T, key: Key): T[Key] {
  return value[key]
}

const value = getProperty(publication1, 'author')
