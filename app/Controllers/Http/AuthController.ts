import User from 'App/Models/User'
import RegisterValid from 'App/Validators/RegisterValidator'
import Logger from '@ioc:Adonis/Core/Logger'

export default class AuthController {
  public async registerShow({ inertia }: HttpContextContract) {
    return inertia.render('Login')
  }

  public async registerStore({ inertia, request }: HttpContextContract) {
    const validated = await request.validate(RegisterValid)

    Logger.info(request.all())
    const { username, email, password } = request.all()

    const user = new User()
    user.email = email
    user.password = password
    user.username = username
    await user.save()

    // return inertia.render('Login')
  }

  public async loginShow({ inertia }: HttpContextContract) {
    return inertia.render('Login')
  }

  public async loginStore({ inertia }: HttpContextContract) {
    return inertia.render('Login')
  }
}
