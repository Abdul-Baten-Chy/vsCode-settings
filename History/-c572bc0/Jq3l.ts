
import app from "./app";

import mongoose from 'mongoose';

async function main() {
    await mongoose.connect(process.env.DATABASE);


}

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})