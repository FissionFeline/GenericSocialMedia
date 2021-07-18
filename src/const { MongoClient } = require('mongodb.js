
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://8uzdw8dw8d88773:<password>@usrdata.z1i9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient("mongodb+srv://8uzdw8dw8d88773:<password>@usrdata.z1i9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
