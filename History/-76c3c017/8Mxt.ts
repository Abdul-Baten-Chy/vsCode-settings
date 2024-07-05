import mongoose from 'mongoose'
import app from './app'
const port = process.env.PORT || 5000

async function main() {
  await mongoose.connect(
    'mongodb+srv://MyTesting:nrvrvDq5XJ4kao4C@cluster0.yjorklr.mongodb.net/myCollection?retryWrites=true&w=majority&appName=Cluster0'
  )
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
