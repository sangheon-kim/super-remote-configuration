import dotenv from 'dotenv'
import App from 'src/app'

dotenv.config()

const PORT = process.env.PORT || 4000

;(() => {
  const app = new App([], PORT)
  app.listen()
})()
