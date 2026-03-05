import { User, Publication } from './models'

export const lucas: User = {
  firstName: 'Pedro',
  lastName: 'Makengo',
  email: 'pedromakengo@gmail.com',
  age: 27,
}

export const mateus: User = {
  firstName: 'Mateus',
  lastName: 'Silva',
  email: 'mateussilva@gmail.com',
  age: 23,
}

export const users: User[] = [lucas, mateus]

export const publications: Publication[] = [
  {
    imageURL: '',
    description: 'description-1',
    author: lucas,
  },
]

export const publication1: Publication = {
  imageURL: 'fake-url-1',
  description: 'description-1',
  author: lucas,
}
