const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://julianty:Wannamakeadb@sentence-per-day.vf9xibg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "SentencePerDay",
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

const User = require("./Models/User");
async function testUpload() {
  try {
    // const db = client.db("SentencePerDay");
    // const coll = db.collection("Users");

    const newUser = new User({ name: "admin" });
    await newUser.save().catch((err) => console.log(err));
    // const result = await coll.insertOne(newUser);
  } finally {
    // await client.close();
    mongoose.connection.close();
  }
}

testUpload().catch(console.dir);
