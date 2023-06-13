import { Sensors } from '@/core'
import { RabbitmqServer, env } from '@/lib'

export class rabbitmqController {
  static async handle(request: Sensors): Promise<void> {
    const server = new RabbitmqServer(env.RABBITMQ_URI)
    await server.start()
    await server.prefetch(1, true)
    await server.publishInExchange(
      'amq.direct', 'rota', JSON.stringify(request)
    )
  }
}

