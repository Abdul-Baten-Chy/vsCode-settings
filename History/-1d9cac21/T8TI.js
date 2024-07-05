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
      const newProduct = req.body;
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

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollections.findOne(query);
      res.send(result);
    });

    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateProductsInfo = req.body;
      const product = {
        $set: {
          name: updateProductsInfo.name,
          types: updateProductsInfo.category,
          rating: updateProductsInfo.rating,
          price: updateProductsInfo.price,
          image: updateProductsInfo.image,
          details: updateProductsInfo.details,
        },
      };

      const result = await productCollections.updateOne(
        filter,
        product,
        options
      );
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
