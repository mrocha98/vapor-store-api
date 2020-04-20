const { OK } = require('http-status-codes')
const stockMock = require('../../mock/stock.mock')

class StockController {
  show(req, res) {
    const id = req.params.id - 1

    return res.status(OK).json(stockMock[id])
  }
}

module.exports = new StockController()
