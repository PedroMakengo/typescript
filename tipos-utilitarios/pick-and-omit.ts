import { User } from './utility-models'

// Pick<Type, keys> and Omit<Type, Keys>
// Pegar<Tipo, Chave> e Omitir<Tipo, Chave>

// Omit<User, {id, isOnline}>
type UserPreviewKeys = 'firstName' | 'lastName' | 'profileImageUrl'
type UserPreview = Pick<User, UserPreviewKeys>

const user: UserPreview = {
  firstName: 'Pedro',
  lastName: 'Makengo',
  profileImageUrl: 'https://pedromakengo.com/png',
}

type UserForm = Omit<User, 'id' | 'isOnline'>

//Omit<Type, Keys> selecionamos as propriedades que queremos omitir no nosso tipo
const userForm: UserForm = {
  firstName: 'Pedro',
  lastName: 'Makengo',
  email: 'pedromakengomiguel@gmail.com',
  phoneNumber: '+244921538972',
  profileImageUrl: 'https://pedromakengo.com/png',
}
