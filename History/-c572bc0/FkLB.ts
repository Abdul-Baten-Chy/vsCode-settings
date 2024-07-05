
import app from "./app";

import mongoose from 'mongoose';
import config from "./config";

async function main() {
    await mongoose.connect(config.database);


}

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})