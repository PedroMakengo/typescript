type User = {
  id: string
  name?: string
  email?: string
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates }
}

function sendWelcomeEmail(user: Required<User>) {
  const body = createBody(user.name)
  sendEmail(user.email, body)
}

function createBody(name: string): string {
  return `Hi ${name}`
}

function sendEmail(email: string, body: string) {
  console.log(`sending: ${body} to ${email}`)
}
