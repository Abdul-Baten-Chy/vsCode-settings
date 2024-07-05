import mongoose from 'mongoose'
import app from './app'
const port = process.env.PORT || 5000

async function main() {
  await mongoose.connect(process.env.DATABASE as string)
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
