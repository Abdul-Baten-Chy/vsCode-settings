import cors from "cors";
import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";
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
    //   const userCollections = client.db("robust-constructionDb").collection("users");
    const foodCollections = client.db("ShareMeal").collection("AvailableFood");
    //   const workSheetCollections = client.db("robust-constructionDb").collection("worksheet");

    app.get("/food", async (req, res) => {
      const result = await foodCollections.find().toArray();
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const result = await userCollections.find().toArray();
      res.send(result);
    });

    app.get("/users/role/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await userCollections.findOne(query);
      res.send(result);
    });

    app.get("/worksheet", async (req, res) => {
      const result = await workSheetCollections.find().toArray();
      res.send(result);
    });

    app.patch("/users/hr/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollections.findOne(query);

      const updatedDoc = {
        $set: {
          role: "Hr Manager",
        },
      };
      const result = await userCollections.updateOne(query, updatedDoc);
      res.send(result);
    });
    app.patch("/users/fire/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollections.findOne(query);
      let isFired = user.isFired || false;
      const updatedDoc = {
        $set: {
          isFired: !isFired,
        },
      };
      const result = await userCollections.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.patch("/users/verify/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollections.findOne(query);
      const isVerified = user.isVerified || false;
      const updatedDoc = {
        $set: {
          isVerified: !isVerified,
        },
      };
      const result = await userCollections.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const users = req.body;
      const result = await userCollections.insertOne(users);
      res.send(result);
    });

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.SECRETE_KEY, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    app.post("/worksheet", async (req, res) => {
      const workInfo = req.body;
      const result = await workSheetCollections.insertOne(workInfo);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
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
