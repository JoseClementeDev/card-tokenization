import { config } from '../shared/config'
import { HealthController } from './api/healthController'
import { RedisHealthRepository } from './database/redisHealthRepository'

const redisHealthRepository = new RedisHealthRepository(config.redis.url)
export const healthController = new HealthController(redisHealthRepository)
