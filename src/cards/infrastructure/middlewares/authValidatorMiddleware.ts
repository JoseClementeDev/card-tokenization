import { Request, Response, NextFunction } from 'express'

export const authValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenValid = 'pk_test_123456'

  const header = req.header('Authorization') ?? ''
  const token = header.split(' ')[1]

  if (token === '') {
    return res.status(401).json({ message: 'Token not provided' })
  }

  if (token !== tokenValid) {
    return res.status(403).json({ message: 'Token not valid' })
  }

  return next()
}
