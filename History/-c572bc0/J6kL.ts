import 'dotenv/config';
import app from "./app";

import mongoose from 'mongoose';

// config({ path: '/custom/path/to/.env' })

console.log(process.cwd());
async function main() {
    await mongoose.connect(process.env.DATABASE);


}

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})