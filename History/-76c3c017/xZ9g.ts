import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
const port = process.env.PORT || 5000

async function main() {
  await mongoose.connect(config.database as string)
}
main()

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
