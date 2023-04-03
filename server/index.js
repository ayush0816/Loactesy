const express = require("express");
const app = express();
const connectToMongo = require("./db");

connectToMongo();

const port = 3000;

app.listen(port, () => {
  console.log("kudos! App is up and running at port", port);
});
