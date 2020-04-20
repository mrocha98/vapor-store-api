const { OK } = require('http-status-codes')
const productsMock = require('../../mock/products.mock')

class ProductController {
  index(req, res) {
    return res.status(OK).json(productsMock)
  }

  show(req, res) {
    const index = req.params.id - 1

    return res.status(OK).json(productsMock[index])
  }
}

module.exports = new ProductController()
