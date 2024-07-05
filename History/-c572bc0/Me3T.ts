import 'dotenv/config';
import app from "./app";




console.log(process.cwd());

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})