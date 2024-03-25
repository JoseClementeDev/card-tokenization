import { Request, Response } from 'express'
import { RedisHealthRepository } from '../database/redisHealthRepository'

export class HealthController {
  constructor (private readonly redisHealthRepository: RedisHealthRepository) {}

  async run (_req: Request, res: Response): Promise<void> {
    const isHealthyRedisManager = await this.redisHealthRepository.isHealthy()

    res.status(200).send({
      app: 'ok',
      redis: isHealthyRedisManager ? 'Ok' : 'Error'
    })
  }
}
