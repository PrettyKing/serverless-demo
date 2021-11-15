const key = 'fb85a53d-5b3f-4847-88f0-a086195527fc'
export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}`)
}
