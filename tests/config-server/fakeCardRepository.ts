import { Card } from '../../src/cards/domain/card'
import { CardRepository } from '../../src/cards/domain/cardRepository'

export class FakeCardRepository implements CardRepository {
  private readonly cards: Card[] = [
    {
      id: 'tkn_card_4588446454be56df',
      card_number: '4111111111111112',
      cvv: '123',
      expiration_month: '09',
      expiration_year: '2025',
      email: 'ricardo@gmail.com',
      creation_date: 1711289427
    }
  ]

  async create (card: Card): Promise<void> {
    this.cards.push(card)
  }

  async getById (id: string): Promise<Card | null> {
    const card = this.cards.find((dbCard) => dbCard.id === id)

    if (card === undefined) {
      return null
    }

    if (card === null) {
      return null
    }

    return card
  }
}
