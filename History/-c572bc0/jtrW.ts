
import app from "./app";

import mongoose from 'mongoose';
import config from "./config";

async function main() {

    const databaseURI = config.database;

    if (!databaseURI) {
        await mongoose.connect(config.database);

    }


}

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})