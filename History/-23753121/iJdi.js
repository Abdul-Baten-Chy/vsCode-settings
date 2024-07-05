import cors from "cors";
import "dotenv/config";
import express from "express";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.yjorklr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const requestedFoods = client.db("ShareMeal").collection("requestedFoods");
    const foodCollections = client.db("ShareMeal").collection("AvailableFood");
    //   const workSheetCollections = client.db("robust-constructionDb").collection("worksheet");

    app.get("/foods", async (req, res) => {
      const result = await foodCollections.find().toArray();
      res.send(result);
    });

    app.get("/foods/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await foodCollections.findOne(query);
      res.send(result);
    });

    app.post("/reqFood", async (req, res) => {
      const reqFood = req.body;
      const result = await requestedFoods.insertOne(reqFood);
      res.send(result);
    });
    app.post("/foods", async (req, res) => {
      const food = req.body;
      console.log(food);
      const result = await foodCollections.insertOne(food);
      res.send(result);
    });

    app.patch("/foods/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await foodCollections.findOne(query);

      const updatedDoc = {
        $set: {
          isAvailable: "Hr Manager",
        },
      };
      const result = await userCollections.updateOne(query, updatedDoc);
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
