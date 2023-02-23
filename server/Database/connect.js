const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const connect = async () => {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();
  mongoose.set("strictQuery", true);
  const db = mongoose.connect(getUri);
  //console.log(getUri);
  // console.log(" Db start");
  //console.log(db);
  console.log("Database connected");
  return db;
};
module.exports = connect;
