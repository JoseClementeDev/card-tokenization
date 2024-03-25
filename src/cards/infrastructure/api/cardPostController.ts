import { Request, Response } from 'express'
import { CreateCard } from '../../application/create-card/createCard'
import { CreateCardInput } from '../../application/create-card/createCardInput'

export class CardPostController {
  constructor (private readonly createCard: CreateCard) {}

  async run (req: Request, res: Response): Promise<Response> {
    try {
      const input = req.body

      const createCardInput = new CreateCardInput(
        input.card_number,
        input.cvv,
        input.expiration_month,
        input.expiration_year,
        input.email
      )

      const response = await this.createCard.run(createCardInput)

      return res.status(201).send(response)
    } catch (error) {
      console.error('Error: Internal server error')
      return res.status(500).send({ message: 'Internal server error' })
    }
  }
}
