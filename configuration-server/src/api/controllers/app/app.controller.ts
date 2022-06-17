import express, { Router } from 'express'

class AppController {
  path: string = '/'
  router: Router = express.Router()

  constructor() {
    this.init()
  }

  init() {
    console.log('AppController Initialize', this.path)
    this.router.get(this.path, this.handleHome)
  }

  async handleHome(
    _: express.Request,
    res: express.Response,
    __: express.NextFunction
  ) {
    await res.status(200).send('Super Remote Configuration')
  }
}

export default AppController
