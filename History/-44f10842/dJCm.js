const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OupxERuBpildU6cZ4IuCbjyIVGlLbXjzllSz3MppyDSjhLIlm06fenoDOATLtmrZn0F2dlzmpgrD3gMNUuNSgb500SAhnnbAn"
);
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

//midleware
app.use(cors());
app.use(express.json());

// const verifyToken = (req, res, next) => {
//   console.log('inside verify token', req.headers.authorization);
//   if (!req.headers.authorization) {
//     return res.status(401).send({ message: 'unauthorized access' });
//   }
//   const token = req.headers.authorization.split(' ')[1];
//   jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ message: 'unauthorized access' })
//     }
//     req.decoded = decoded;
//     next();
//   })
// }

const uri = `mongodb+srv://${process.env.USER}:${process.env.USER_PASS}@cluster0.yjorklr.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    const userCollections = client
      .db("robust-constructionDb")
      .collection("users");
    const serviceCollections = client
      .db("robust-constructionDb")
      .collection("services");
    const workSheetCollections = client
      .db("robust-constructionDb")
      .collection("worksheet");
    const paymentCollection = client
      .db("robust-constructionDb")
      .collection("payments");

    app.get("/services", async (req, res) => {
      const result = await serviceCollections.find().toArray();
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

    // Payments

    app.post("/create-payment-intent", async (req, res) => {
      const { salary } = req.body;
      console.log(salary, "amount inside the intent");

      const paymentIntent = await stripe.paymentIntents.create({
        salary: salary,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    app.post("/payments", async (req, res) => {
      const payment = req.body;
      console.log(payment, "my payment");
      const paymentResult = await paymentCollection.insertOne(payment);

      //  carefully delete each item from the cart
      // console.log("payment info", payment);
      // const query = {
      //   _id: {
      //     $in: payment.cartIds.map((id) => new ObjectId(id)),
      //   },
      // };

      // const deleteResult = await cartCollection.deleteMany(query);

      // send user email about payment confirmation
      // mg.messages
      //   .create(process.env.MAIL_SENDING_DOMAIN, {
      //     from: "Mailgun Sandbox <postmaster@sandboxbdfffae822db40f6b0ccc96ae1cb28f3.mailgun.org>",
      //     to: ["jhankarmahbub7@gmail.com"],
      //     subject: "Bistro Boss Order Confirmation",
      //     text: "Testing some Mailgun awesomness!",
      //     html: `
      //       <div>
      //         <h2>Thank you for your order</h2>
      //         <h4>Your Transaction Id: <strong>${payment.transactionId}</strong></h4>
      //         <p>We would like to get your feedback about the food</p>
      //       </div>
      //     `,
      //   })
      //   .then((msg) => console.log(msg)) // logs response data
      //   .catch((err) => console.log(err)); // logs any error`;

      res.send(paymentResult);
    });
    // app.get("/payments/:email", async (req, res) => {
    //   const query = { email: req.params.email };
    //   if (req.params.email !== req.decoded.email) {
    //     return res.status(403).send({ message: "forbidden access" });
    //   }
    //   const result = await paymentCollection.find(query).toArray();
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
