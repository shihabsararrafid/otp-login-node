import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
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
export default connect;
