import Todo from '#models/todo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TodosController {
  public async createTodo({ request, response, auth }: HttpContext) {
    const { title, description } = request.only(['title', 'description'])

    const requiredFields = ['title', 'description']

    for (const field of requiredFields) {
      if (!request.input(field)) {
        return response.status(400).json({ msg: `Please fill ${field}` })
      }
    }

    await Todo.create({
      userId: auth.user!.id,
      title,
      description,
    })

    return response.redirect('/dashboard')
  }
}
