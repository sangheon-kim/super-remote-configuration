import { Controller } from 'src/types/env.d'
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'

class App {
  public app: express.Application = express()
  public api_version: string = process.env.API_VERSION || '1'

  constructor(controllers: Controller[], private port: number | string) {
    this.initMiddlewares()
    this.initControllers(controllers)
  }

  private parseRequest() {
    const { app } = this

    app.use(express.json())
    app.use(cookieParser())
  }

  private corsProcess() {
    const whiteList = ['http://localhost:3000']

    const corsOptions: cors.CorsOptions = {
      origin:
        process.env.NODE_ENV === 'production'
          ? function (origin, callback) {
              if (whiteList.includes(origin || '')) {
                callback(null, true)
              } else {
                callback(new Error('Not Allowed Origin!'))
              }
            }
          : '*',
      credentials: true,
    }

    this.app.use(cors(corsOptions))
  }

  /** Using Middleware */
  private initMiddlewares() {
    const { app } = this

    this.parseRequest()
    this.corsProcess()
    app.use(morgan('dev'))
  }

  private initControllers(controllers: Controller[]) {
    controllers.forEach((controller: Controller) =>
      this.app.use(`/v${this.api_version}`, controller.router)
    )
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App
