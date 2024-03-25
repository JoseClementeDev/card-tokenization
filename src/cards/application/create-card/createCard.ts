import { v4 as uuid } from 'uuid'
import { createHash, unixTimestamp } from '../../../shared/utils'
import { Card } from '../../domain/card'
import { CardRepository } from '../../domain/cardRepository'
import { CreateCardInput } from './createCardInput'
import { CreateCardOutput } from './createCardOutput'
// import crypto from "node:crypto";

export class CreateCard {
  constructor (private readonly cardRepository: CardRepository) {}

  async run (input: CreateCardInput): Promise<CreateCardOutput> {
    // const hashId = crypto.createHash("md5").update(uuid()).digest("hex");
    const hashId = createHash(uuid(), 8)
    const cardId = `tkn_card_${hashId}`
    const creationDate = unixTimestamp()

    const newCardToken = new Card(
      cardId,
      input.card_number,
      input.cvv,
      input.expiration_month,
      input.expiration_year,
      input.email,
      creationDate
    )

    await this.cardRepository.create(newCardToken)

    const createCardOutput = new CreateCardOutput(
      newCardToken.id,
      newCardToken.card_number,
      newCardToken.expiration_month,
      newCardToken.expiration_year,
      newCardToken.email,
      newCardToken.creation_date
    )

    return createCardOutput
  }
}
