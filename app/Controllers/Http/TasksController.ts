import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {

  public async store({ request, response }: HttpContextContract) {

    const body = request.body()

    try {
      const res = await Task.create(body)
      
      response.status(201)
      
      return res

    } catch(e) {

      response.status(400)

      return {
        message: `Não foi possível criar a task.`
      }
    }
  }

  public async index() {

    const tasks = await Task.all()

    return tasks
  }

  public async show({ params: { id }}: HttpContextContract) {

    const task = await Task.find(id)

    return task
  }

  public async update({ params: { id }, request, response }: HttpContextContract) {

    const body = request.body()

    try {
      
      const task = await Task.findOrFail(id)

      task.title = body.title
      task.description = body.description
      task.status = body.status

      task.save()

      return task

    } catch(e) {

      response.status(400)

      return {
        message: `Não foi possível atualizar a task de id ${id}.`
      }

    }
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    try {
      
      const task = await Task.findOrFail(id)

      task.delete()

      return {
        message: `A task de id ${id} foi excluída.`
      }

    } catch(e) {

      response.status(400)

      return {
        message: `Não foi possível deletar a task de id ${id}.`
      }

    }
  }
}
