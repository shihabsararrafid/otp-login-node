const express = require("express");
const cors = require("cors");
const connect = require("./Database/connect");
const morgan = require("morgan");
const authenticationRoute = require("./Routes/Api/auth/authentication.route");
const app = express();

// Using the third party middlewares

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 5000;
app.get("/", (req, res) => {
  res.status(200).send("GEt Request");
  console.log(" Get Request");
});
app.use("/api/auth", authenticationRoute);
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
