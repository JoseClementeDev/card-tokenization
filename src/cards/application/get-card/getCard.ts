// import { Card } from "../../domain/card";
import { CardNotFoundError } from '../../domain/cardNotFoundError'
import { CardRepository } from '../../domain/cardRepository'
import { GetCardOutput } from './getCardOutput'

export class GetCard {
  constructor (private readonly cardRepository: CardRepository) {}

  async run (cardId: string): Promise<GetCardOutput> {
    const card = await this.cardRepository.getById(cardId)

    if (card == null) {
      throw new CardNotFoundError(`Card not found Id: ${cardId}`)
    }

    return new GetCardOutput(
      card.id,
      card.card_number,
      card.expiration_month,
      card.expiration_year,
      card.email,
      card.creation_date
    )
  }
}
