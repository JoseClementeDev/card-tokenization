import app from './app'
import { config } from './shared/config'

const PORT = config.server.port

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
