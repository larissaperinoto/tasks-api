//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index() {

    const tasks = await Task.all()

    return tasks
  }
}
