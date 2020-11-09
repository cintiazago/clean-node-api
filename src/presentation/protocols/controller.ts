import { HttpRequest, HttpResponse } from './http'

export interface Controlller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
