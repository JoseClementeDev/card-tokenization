import request from 'supertest'
import app from './config-server/app-test'

const token = 'pk_test_123456'

describe('POST /tokens', () => {
  describe('given a card properties', () => {
    const newCard = {
      card_number: '4111111111111111',
      cvv: '123',
      expiration_month: '09',
      expiration_year: '2025',
      email: 'alberto@gmail.com'
    }

    // should respond with a 200 code
    test('should respond with a 201 status code', async () => {
      const response = await request(app)
        .post('/tokens')
        .set('Authorization', `Bearer ${token}`)
        .send(newCard)
      expect(response.statusCode).toBe(201)
    })

    // should respond a json as a content type
    test('should have a Content-Type: application/json header', async () => {
      const response = await request(app)
        .post('/tokens')
        .set('Authorization', `Bearer ${token}`)
        .send(newCard)
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })

    // should respond with a json object containing the new task with an id
    test('should respond with an task ID', async () => {
      const response = await request(app)
        .post('/tokens')
        .set('Authorization', `Bearer ${token}`)
        .send(newCard)
      expect(response.body.id).toBeDefined()
    })
  })

  describe('when the card properties is invalid', () => {
    // should respond with a 400 code
    test('should respond with a 400 status code', async () => {
      const someCard = {
        card_number: 'some card number',
        cvv: 'some cvv',
        expiration_month: 'some expiration month',
        expiration_year: 'some expiration year',
        email: 'some email'
      }

      const response = await request(app)
        .post('/tokens')
        .set('Authorization', `Bearer ${token}`)
        .send(someCard)
      expect(response.statusCode).toBe(400)
    })
  })
})
