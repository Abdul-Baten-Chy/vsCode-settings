import express, { Request, } from "express"
const app = express()
const port = 3000

app.get('/', (req: Request,) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})