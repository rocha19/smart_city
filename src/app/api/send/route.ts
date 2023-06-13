export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(body)
    // rabbitmqController.handle(body)
    return new Response('success', { status: 200 })
  } catch (error: any) {
    return new Response(error.message, { status: 500 })
  }
}