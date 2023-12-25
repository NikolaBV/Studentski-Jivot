const express = require("express");
const cors = require(`cors`);
const Spending = require(`./models/Spending.js`);
const User = require(`./models/User.js`);
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
require(`dotenv`).config();

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running on port 4040");
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

/*

*GET Request test

app.get("/api/login", (req, res) => {
  const { email, password } = req.query;
  console.log(`Email: ${email}, Password: ${password}`);
  res.json({ message: "Received credentials", email, password });
});
*/

//Registerin functionality
app.post("/api/register", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;
  const user = await User.create({
    email,
    password,
  });
  res.json(user);
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
