type Person = {
  firstName: string
  lastName: string
}

const value = { firstName: 'Pedro' } as Person
// const value = <Person>{}

// 1 - algo que acontece em tempo de execução ou fator externo
value.lastName = 'Lucas'

// 2 - criando mocks para testes automatizados

console.log(value.firstName)
