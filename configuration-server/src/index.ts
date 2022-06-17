import dotenv from 'dotenv'
import App from 'src/app'
import AppController from './api/controllers/app/app.controller'

dotenv.config()

const PORT = process.env.PORT || 4000

;(() => {
  const app = new App([new AppController()], PORT)
  app.listen()
})()
