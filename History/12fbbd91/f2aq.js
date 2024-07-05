const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//middleware

app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://taskUsers:2OWzGGLC7gst6fRp@cluster0.yjorklr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const tasksCollections = client.db("tasks-collections").collection("tasks");
   
    app.post('/task', async(req,res)=>{
      const task = req.body;
      console.log(task);
      const result = await tasksCollections.insertOne(task)
      res.send(result)
    })
    app.get('/task/:email', async(req,res)=>{
      const email = req.params.email;
      const query = {userEmail:email}
      const result = await tasksCollections.find(query).toArray()
      res.send(result)
    })

    app.delete('/task/:id', async(req,res)=>{
      const id = req.params.id;
      console.log(id);
      const query = {_id:new ObjectId(id)}
      const result = await tasksCollections.deleteOne(query)
      res.send(result)
    })


    app.patch('/task/:id', async(req,res)=>{
      const id = req.params.id;
      console.log(id);
      const query = {_id:new ObjectId(id)}
      // const options = { upsert: true };
      const updateProductsInfo = req.body;
      const updateDoc = {
        $set: {
          title:updateProductsInfo.title,
          desc:updateProductsInfo.desc,
          date:updateProductsInfo.date
        },
      };
      const result = await tasksCollections.updateOne(query, updateDoc)
      res.send(result)
    })




    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//taskUsers
//2OWzGGLC7gst6fRp