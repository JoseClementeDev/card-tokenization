import express from 'express'
import { cardRouter } from './cardRouter-test'
import { healthRouter } from '../../src/health/api/healthRouter'

// app.get('/ping', (_req, res) => {
//     console.log('Someone pinged here!!')
//     res.send('pong')
// })

// app.post('/login', (_req, res) => {
//     res.send('login')
// })

const app = express()

app.use(express.json())

app.use('/tokens', cardRouter)
app.use('/health', healthRouter)
// app.use(function (
//   err: Error,
//   _req: Request,
//   res: Response,
//   _next: NextFunction
// ) {
//   res.status(500);
//   res.send(err);
// });

export default app
