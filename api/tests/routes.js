const request = require('supertest')
const app = require('../server.js')
const User = require('../models/User')
const chai = require('chai')

const should = chai.should()

describe('Test routes', () => {
  it('Should return a 404 for an invalid URL', (done) => {
    request(app)
    .get('/nothing-to-see-here')
    .expect(404, done)
  })  
  it('Should register a user', (done) => {
    request(app)
    .post('/auth/register')
    .send({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jasomething@doe.com',
      password: 'edison123'
    })
    .expect(200, done)
  })
  it('should login a user', (done) => {
    request(app)
    .post('/auth')
    .send({
      email: `jasomething@doe.com`,
      password: "edison123"
    })
    .expect(200)
    .then((response) => {
      token = response.body.token
      done()
    })
  }).timeout(5000)
  it('should require correct credentials', (done) => {
    request(app)
    .post('/auth')
    .send({
      email: `test@test.com`,
      password: "kittenfluffy"
    })
    .expect(401, done)
  })
  it('should require a token to view products', (done) => {
    request(app)
    .get('/products')
    .expect(401, done)
  })
  it('should display products to valid token bearers', (done) => {
    request(app)
    .get('/products')
    .set('Authorization', 'Bearer ' + token)
    .expect(200)
    .then((response) => {
      response.body.should.be.an('array')
      done()
    })
  })
  it('Should not let normal users through to/admin', (done) => {
    request(app)
      .get('/admin')
      .expect(401, done)
  })

  after(() => {
    User.remove({ email: 'test@testing.com' })
    .then(() => {
      console.log('Cleaned up the database!')
    })
  })
})
