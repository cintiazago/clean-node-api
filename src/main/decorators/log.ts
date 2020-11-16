import { Controlller, HttpResponse, HttpRequest } from '../../presentation/protocols'

export class LogControllerDecorator implements Controlller {
  private readonly controller: Controlller

  constructor (controller: Controlller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    return httpResponse
  }
}
