const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// server creation
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// server connection
// const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";         previous one

const uri = "mongodb+srv://next_db:VPqMTwPWvGsaCLlB@ost-cluster.i42fc.mongodb.net/test";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect().then(() => console.log("connected"));
    const database = client.db("next_db");
    const userCollection = database.collection("user");

    app.post("/create-user", async function (req, res) {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      console.log(result);
      res.send(result);
    });

    app.get("/get-user/:email", async (req, res) => {
      const srvEmail = req.params.email;
      const user = await userCollection.findOne({ email: srvEmail });
      res.send(user);
    });
  } catch (err) {
    console.log(err);
  } finally {
    // do nothing
  }
}

run();

app.get("/", async (req, res) => {
  res.send("server is connected");
  console.log("Server is connected");
});
