import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError, ZodIssue } from 'zod'

export const schemaValidator =
  (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({
          body: req.body,
          params: req.params,
          query: req.query,
          headers: req.headers
        })
        return next()
      } catch (error) {
      // console.log(error);
        if (error instanceof ZodError) {
          const errorMessages = error.errors.map((issue: ZodIssue) => ({
            path: `${issue.path.join('.')}`,
            description: `${issue.message}`
          }))
          return res
            .status(400)
            .json({ error: 'Invalid data', details: errorMessages })
        } else {
          return res.status(500).json({ error: 'Internal Server Error' })
        }
      }
    }
