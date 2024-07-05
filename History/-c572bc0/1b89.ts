import app from './app'

import mongoose from 'mongoose'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database as string)
    app.listen(config.port, () => {
      console.log(`Example apps listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('somthing happen', error)
  }
}

main()
