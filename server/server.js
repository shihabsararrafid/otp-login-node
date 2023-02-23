import express from "express";
import cors from "cors";

const app = express();

// Using the third party middlewares

app.use(express.json());
app.use(cors());

const port = 5000;
app.get("/", (req, res) => {
  res.status(200).send("GEt Request");
  console.log(" Get Request");
});
app.listen(port, () => {
  console.log(`Server is running at http:\\\\localhost:${port}`);
});
