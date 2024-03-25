import { CreateCard } from '../../src/cards/application/create-card/createCard'
import { GetCard } from '../../src/cards/application/get-card/getCard'
import { CardGetController } from '../../src/cards/infrastructure/api/cardGetController'
import { CardPostController } from '../../src/cards/infrastructure/api/cardPostController'
// import { config } from '../../src/shared/config'
import { FakeCardRepository } from './fakeCardRepository'

const fakeCardRepository = new FakeCardRepository()
const createCard = new CreateCard(fakeCardRepository)
const getCard = new GetCard(fakeCardRepository)
export const postCardController = new CardPostController(createCard)
export const getCardController = new CardGetController(getCard)
