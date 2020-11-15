import { Express } from 'express'
import { bodyParser } from '../middlerwares/body-parser'
import { cors } from '../middlerwares/cors'
import { contentType } from '../middlerwares/content-type'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
