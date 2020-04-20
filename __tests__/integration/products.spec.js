const req = require('supertest')
const { OK } = require('http-status-codes')
const app = require('../../src/app')
const mockProducts = require('../../src/mock/products.mock')

describe('products', () => {
  it('should return an array of 6 products that contain all data from products.mock.js file', async () => {
    expect.hasAssertions()
    const res = await req(app).get('/products')

    expect(res.status).toBe(OK)
    expect(res.body).toHaveLength(6)
    expect(res.body).toStrictEqual(mockProducts)
  })
  it('should return all info for the first product inside products.mock.js', async () => {
    expect.hasAssertions()

    const res = await req(app).get('/products/1')

    expect(res.status).toBe(OK)
    expect(res.body).toStrictEqual(mockProducts[0])
  })
})
