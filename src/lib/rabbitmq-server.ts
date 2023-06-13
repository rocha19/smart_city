import { Channel, Connection, connect } from 'amqplib'

export class RabbitmqServer {
  private connect!: Connection
  private channel!: Channel
  constructor(private uri: string) { }
  async start(): Promise<void> {
    this.connect = await connect(this.uri)
    this.channel = await this.connect.createChannel()
  }
  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message))
  }
  async prefetch(count: number, global?: boolean) {
    this.channel.prefetch(count, global)
  }
}