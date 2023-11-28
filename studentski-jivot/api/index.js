const express = require("express");
const cors = require(`cors`);
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});

app.post("/api/spending", (req, res) => {
  const body = req.body;
  res.json(req.body);
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
