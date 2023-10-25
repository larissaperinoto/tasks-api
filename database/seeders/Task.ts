import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Task from 'App/Models/Task'

export default class extends BaseSeeder {
  
  public async run () {
    await Task.createMany([
      {
        title: 'Estudar sobre o framework Adonis.js',
        description: 'Ler a documentação e assistir alguns vídeos.',
        status: 'done'
      },
      {
        title: 'Criar uma aplicação de CRUD',
        description: 'Utilizar o framework Adonis.js e o banco de dados Postgres',
        status: 'done'
      },
      {
        title: 'Inserir documentação do serviço com Swagger',
        description: '',
        status: 'pending'
      },
    ])
  
  }
}
