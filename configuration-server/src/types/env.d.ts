const { Router } = require('express')

export interface Controller {
  path: string
  router: Router
  init(): void
}
