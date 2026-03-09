import { User } from './utility-models'

function sendEmail(
  user: Pick<User, 'email' | 'firstName'>,
  message: string,
): string {
  return message
}

type SendEmailFn = typeof sendEmail

type Return = ReturnType<() => User>

type T1 = Promise<Promise<string>>

type T2 = Awaited<T1>

type T3 = Awaited<boolean | Promise<string>>
