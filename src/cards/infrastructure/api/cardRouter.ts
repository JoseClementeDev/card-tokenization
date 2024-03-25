import { Router } from 'express'
import { getCardController, postCardController } from '../dependencies'
import { schemaValidator } from '../middlewares/schemaValidatorMiddleware'
import {
  CreateCardTokenSchema,
  GetCardTokenSchema
} from '../schemas/cardSchema'
import { authValidator } from '../middlewares/authValidatorMiddleware'

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
