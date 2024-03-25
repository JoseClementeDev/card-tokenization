import { Router } from 'express'
import { getCardController, postCardController } from './dependencies-test'
import { authValidator } from '../../src/cards/infrastructure/middlewares/authValidatorMiddleware'
import { schemaValidator } from '../../src/cards/infrastructure/middlewares/schemaValidatorMiddleware'
import { CreateCardTokenSchema, GetCardTokenSchema } from '../../src/cards/infrastructure/schemas/cardSchema'

const cardRouter = Router()

cardRouter.post(
  '/',
  authValidator,
  schemaValidator(CreateCardTokenSchema),
  postCardController.run.bind(postCardController)
)

cardRouter.get(
  '/:id',
  authValidator,
  schemaValidator(GetCardTokenSchema),
  getCardController.run.bind(getCardController)
)

export { cardRouter }
