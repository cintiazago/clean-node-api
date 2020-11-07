import { HttpRequest, HttpResponse } from './http'

export interface Controlller {
  handle (httpRequest: HttpRequest): HttpResponse
}
