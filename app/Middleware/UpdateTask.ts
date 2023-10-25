import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import { tasksSchemaMessages } from 'App/Utils/Error.messages'

export default class UpdateTask {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    
    const taskSchema = schema.create({
      title: schema.string.optional(),
      status: schema.enum(['pending', 'done']),
      description: schema.string.nullable()
    })

    await request.validate({ schema: taskSchema, messages: tasksSchemaMessages })

    await next()
  }
}
