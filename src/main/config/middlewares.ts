import { Express } from 'express'
import { bodyParser } from '../middlerawares/body-parser'
import { cors } from '../middlerawares/cors'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
