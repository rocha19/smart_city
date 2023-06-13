export const env = {
  RABBITMQ_URI: process.env.RABBITMQ_URI ?? '',
  SOCKET_EVENT_NAME: process.env.SOCKET_EVENT_NAME ?? '',
  SOCKET_CLIENT_SERVER: process.env.SOCKET_CLIENT_SERVER ?? '',
  PORT: process.env.PORT ?? 5001,
  QUEUE_NAME: process.env.QUEUE_NAME ?? ''
}