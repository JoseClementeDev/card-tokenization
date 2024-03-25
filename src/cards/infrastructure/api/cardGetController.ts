import { Request, Response } from 'express'
import { GetCard } from '../../application/get-card/getCard'
import { CardNotFoundError } from '../../domain/cardNotFoundError'

export class CardGetController {
  constructor (private readonly getCard: GetCard) {}

  async run (req: Request, res: Response): Promise<Response> {
    try {
      const tokenId = req.params.id
      const response = await this.getCard.run(tokenId)

      return res.status(200).send(response)
    } catch (error) {
      if (error instanceof CardNotFoundError) {
        console.error(`Error: ${error.message}`)
        return res.status(400).send({ message: 'Card token not found or expired' })
      }

      console.error('Error: Internal server error')
      return res.status(500).send({ message: 'Internal server error' })
    }
  }
}
