import crypto from 'crypto'

export const unixTimestamp = (date = Date.now()): number => {
  return Math.floor(date / 1000)
}

export const createHash = (data: string, length: number): string => {
  return crypto
    .createHash('shake256', { outputLength: length })
    .update(data)
    .digest('hex')
}
