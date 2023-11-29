const express = require("express");
const cors = require(`cors`);
const Spending = require(`./models/Spending.js`);
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const { Transaction } = require("mongodb");
require(`dotenv`).config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});

app.post("/api/spending", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, datetime, price } = req.body;
  const spending = await Spending.create({
    name,
    description,
    datetime,
    price,
  });
  res.json(spending);
});

app.get("/api/spendings", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const spendings = await Spending.find();
  res.json(spendings);
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
