import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string([rules.regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]),
  })

  public messages: CustomMessages = {
    'required': 'The {{ field }} is required to create a new account',
    'email.unique': 'Email already taken',
    'password.regex':
      'It must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter',
  }
}
