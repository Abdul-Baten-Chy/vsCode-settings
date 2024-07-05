
import app from "./app";

import mongoose from 'mongoose';
import config from "./config";

async function main() {
    await mongoose.connect("mongodb+srv://MyTesting:nrvrvDq5XJ4kao4C@cluster0.yjorklr.mongodb.net/myCollection?retryWrites=true&w=majority&appName=Cluster0");


}

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})