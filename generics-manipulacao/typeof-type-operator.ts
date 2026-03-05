// No contexto de uma expressa (JavaScript)

console.log(typeof 'hello world')

// "typeof" Type Operator - No contexto de um type, para referenciar o tipo de uma variável ou propriedade

const lightMode = {
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  primary: '#8158f9',
}

type Colors = typeof lightMode

const darkMode: Colors = {
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  primary: '#8158f9',
}
