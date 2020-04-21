const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

class App {
  constructor() {
    this.server = express()

    this.whiteList = [
      'http://localhost:3000',
      'http://localhost:5000',
      'https://vapor-store.now.sh',
    ]

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(helmet())
    this.server.use(morgan('dev'))
    this.server.use(
      cors({
        origin: (origin, callback) => {
          if (!origin) return callback(null, true)
          if (this.whiteList.indexOf(origin) === -1) {
            const msg =
              'The CORS policy for this site does not allow access from the specified Origin.'
            return callback(new Error(msg), false)
          }
          return callback(null, true)
        },
      })
    )
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server
