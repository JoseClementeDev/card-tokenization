export const config = {
  server: {
    port: process.env.PORT ?? 3009
  },
  redis: {
    url: process.env.REDIS_URL ?? 'redis://localhost:6389'
  },
  card: {
    expirationInMs: 60000
  }
}
