const req = require('supertest')
const { OK } = require('http-status-codes')
const app = require('../../src/app')
const mockStock = require('../../src/mock/stock.mock')

describe('stock', () => {
  it("should return an object that contain the product's amount from stock.mock.js file", async () => {
    expect.hasAssertions()

    const res = await req(app).get('/stock/1')
    const { status } = res

    expect(status).toBe(OK)
    expect(res.body.amount).toStrictEqual(mockStock[0].amount)
  })
})
