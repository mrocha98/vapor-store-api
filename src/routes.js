const { NO_CONTENT } = require('http-status-codes')
const routes = require('express').Router()
const ProductController = require('./app/controllers/ProductController')
const StockController = require('./app/controllers/StockController')

routes.get('/', (req, res) => res.sendStatus(NO_CONTENT))
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.get('/stock/:id', StockController.show)

module.exports = routes
