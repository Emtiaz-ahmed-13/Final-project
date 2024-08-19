require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5002; // Changed the port to 5002
const cors = require('cors'); 
const { MongoClient, ServerApiVersion } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nkzli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    //menu collection 
    const menuCollection = client.db("bistroDB").collection("menu");
    const reviewCollection = client.db("bistroDB").collection("reviews");

    app.get('/menu',async(req,res)=>{
        const result=await menuCollection.find().toArray();
        res.send(result);
    })
    //review collection 
    app.get('/reviews',async(req,res)=>{
      const result=await reviewCollection.find().toArray();
      res.send(result);
  })

    











    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
