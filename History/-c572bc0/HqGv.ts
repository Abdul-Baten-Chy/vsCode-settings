import 'dotenv/config';
import app from "./app";


config({ path: '/custom/path/to/.env' })

console.log(process.cwd());

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})