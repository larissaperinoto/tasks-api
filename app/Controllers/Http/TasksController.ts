import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {

  public async store({ request, response }: HttpContextContract) {

    const body = request.body()

    response.status(201)

    const res = await Task.create(body)

    return res
  }

  public async index() {

    const tasks = await Task.all()

    return tasks
  }

  public async show({ params: { id }}: HttpContextContract) {

    const task = await Task.find(id)

    return task
  }
}
