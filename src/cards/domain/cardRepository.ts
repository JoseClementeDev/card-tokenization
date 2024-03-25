import { Card } from './card'

export interface CardRepository {
  getById: (id: string) => Promise<Card | null>
  create: (card: Card) => Promise<void>
}
