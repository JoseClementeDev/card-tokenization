import request from 'supertest'
import app from './config-server/app-test'

const token = 'pk_test_123456'

describe('GET /tokens/:id', () => {
  describe('given a card id', () => {
    const cardId = 'tkn_card_4588446454be56df'

    test('should respond with a 200 status code', async () => {
      const response = await request(app)
        .get(`/tokens/${cardId}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
      expect(response.statusCode).toBe(200)
    })

    // should respond a json as a content type
    test('should have a Content-Type: application/json header', async () => {
      const response = await request(app)
        .get(`/tokens/${cardId}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })

    // should respond with a json object containing the card with an id
    test('should respond with an card ID', async () => {
      const response = await request(app)
        .get(`/tokens/${cardId}`)
        .set('Authorization', `Bearer ${token}`)
        .send()
      expect(response.body.id).toBeDefined()
    })
  })

  describe('when the param id is invalid', () => {
    // should respond with a 400 code
    test('should respond with a 400 status code', async () => {
      const cardId = 'token_id'

      const response = await request(app)
        .get(`/tokens/${cardId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(cardId)
      expect(response.statusCode).toBe(400)
    })
  })
})
