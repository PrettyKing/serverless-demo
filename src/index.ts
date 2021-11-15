import { handleRequest } from './handler'
const key = 'fb85a53d-5b3f-4847-88f0-a086195527fc'
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
