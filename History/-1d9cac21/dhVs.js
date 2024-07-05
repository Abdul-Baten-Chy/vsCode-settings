import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT;

const uri = `mongodb+srv://${process.env.USER}:${process.env.USER_PASS}@cluster0.yjorklr.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const productCollections = client.db("toyStore").collection("Products");
    const productInCart = client.db("toyStore").collection("cart");

    app.get("/products", async (req, res) => {
      const result = await productCollections.find().toArray();
      res.send(result);
    });
    app.post("/products", async (req, res) => {
      newProduct = req.body;
      const result = await productCollections.insertOne(newProduct);
      res.send(result);
    });
    app.get("/cart", async (req, res) => {
      const result = await productInCart.find().toArray();
      res.send(result);
    });
    app.get("/products/:category", async (req, res) => {
      const category = req.params.category;
      const query = { category: category };
      const result = await productCollections.find(query).toArray();
      res.send(result);
    });
    app.post("/cart", async (req, res) => {
      const cartItem = req.body;
      const result = await productInCart.insertOne(cartItem);
      console.log(result);
      res.send(result);
    });
    app.delete("/cart/:id", async (req, res) => {
      const cartId = req.params.id;
      const query = { _id: new ObjectId(cartId) };
      const result = await productInCart.deleteOne(query);
      res.send(result);
    });

    // app.patch("/users/hr/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const user = await userCollections.findOne(query);

    //   const updatedDoc = {
    //     $set: {
    //       role: "Hr Manager",
    //     },
    //   };
    //   const result = await userCollections.updateOne(query, updatedDoc);
    //   res.send(result);
    // });
    // app.patch("/users/fire/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const user = await userCollections.findOne(query);
    //   let isFired = user.isFired || false;
    //   const updatedDoc = {
    //     $set: {
    //       isFired: !isFired,
    //     },
    //   };
    //   const result = await userCollections.updateOne(query, updatedDoc);
    //   res.send(result);
    // });

    // app.patch("/users/verify/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const user = await userCollections.findOne(query);
    //   const isVerified = user.isVerified || false;
    //   const updatedDoc = {
    //     $set: {
    //       isVerified: !isVerified,
    //     },
    //   };
    //   const result = await userCollections.updateOne(query, updatedDoc);
    //   res.send(result);
    // });

    // app.post("/users", async (req, res) => {
    //   const users = req.body;
    //   const result = await userCollections.insertOne(users);
    //   res.send(result);
    // });

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
