import { createClient } from 'redis'
import { CardRepository } from '../../domain/cardRepository'
import { Card } from '../../domain/card'
import { config } from '../../../shared/config'

export class RedisCardRepository implements CardRepository {
  private readonly client

  constructor (url: string) {
    this.client = createClient({
      url
    })

    this.client.on('error', (error) => {
      console.error('Redis client error', error)
    })
  }

  private async connectIfNecessary (): Promise<void> {
    if (this.client.isReady) {
      return
    }

    await this.client.connect()
  }

  async create (card: Card): Promise<void> {
    await this.connectIfNecessary()

    const options = { expirationInMs: config.card.expirationInMs }

    await this.client.set(card.id, JSON.stringify(card), {
      PX: options.expirationInMs
    })

    await this.client.quit()
  }

  async getById (key: string): Promise<Card | null> {
    await this.connectIfNecessary()

    const card = await this.client.get(key)

    await this.client.quit()

    if (card === null) {
      return null
    }

    const parseCard = JSON.parse(card)

    return new Card(
      parseCard.id,
      parseCard.card_number,
      parseCard.cvv,
      parseCard.expiration_month,
      parseCard.expiration_year,
      parseCard.email,
      parseCard.creation_date
    )
  }
}
