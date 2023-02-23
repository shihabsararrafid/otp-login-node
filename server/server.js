import express from "express";
import cors from "cors";
import connect from "./Database/connect.js";

const app = express();

// Using the third party middlewares

app.use(express.json());
app.use(cors());

const port = 5000;
app.get("/", (req, res) => {
  res.status(200).send("GEt Request");
  console.log(" Get Request");
});
// run server

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server is running at http:\\\\localhost:${port}`);
      });
    } catch (error) {
      console.log(error.message);
    }
  })
  .catch((error) => console.log(error.message));
