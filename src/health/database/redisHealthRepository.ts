import { createClient } from 'redis'

export class RedisHealthRepository {
  private readonly client

  constructor (url: string) {
    this.client = createClient({
      url
    })

    this.client.on('error', (error) => {
      console.error('Redis client error', error)
    })
  }

  private async connectIfNecessary (): Promise<void> {
    if (this.client.isReady) {
      return
    }

    await this.client.connect()
  }

  async isHealthy (): Promise<boolean> {
    try {
      await this.connectIfNecessary()
      await this.client.ping()
      return true
    } catch (error) {
      return false
    }
  }
}
