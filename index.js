const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
//port
const port = process.env.PORT || 5000;

//MIDDLE WARE
app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://tofayel101:goiUXpPvfREKnU9m@cluster0.urbkh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    client.connect();
    const projectCollection = client.db("tofayel101").collection("project");

    app.get("/projects", async (req, res) => {
      const query = {};
      const results = await projectCollection.find(query).toArray();
      res.send(results);
    });
    app.get("/projects/:id", async(req, res) => {
      const id = req.params.id;
      const query= {_id:ObjectId(id)}
      const result=await projectCollection.findOne(query)
      res.send(result)
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("tofayel101");
});
app.listen(port);
