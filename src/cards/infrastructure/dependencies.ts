import { config } from '../../shared/config'
import { RedisCardRepository } from './database/redisCardRepository'
import { CreateCard } from '../application/create-card/createCard'
import { GetCard } from '../application/get-card/getCard'
import { CardPostController } from './api/cardPostController'
import { CardGetController } from './api/cardGetController'

const redisCardRepository = new RedisCardRepository(config.redis.url)
const createCard = new CreateCard(redisCardRepository)
const getCard = new GetCard(redisCardRepository)
export const postCardController = new CardPostController(createCard)
export const getCardController = new CardGetController(getCard)
