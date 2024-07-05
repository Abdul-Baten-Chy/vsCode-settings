import 'dotenv/config';
import app from "./app";

import mongoose from 'mongoose';

config({ path: '/custom/path/to/.env' })

console.log(process.cwd());
async function main() {
    await mongoose.connect('mongodb+srv://MyTesting:nrvrvDq5XJ4kao4C@cluster0.yjorklr.mongodb.net/myCollection?retryWrites=true&w=majority&appName=Cluster0');


}

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})