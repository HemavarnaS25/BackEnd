const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const Login = require("./models/loginSchema");
dotenv.config();
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://Mern2025:mern2025@mern2025.ar1xv.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
  });
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Backend! Your rollercoaster starts now. Fasten your seatbelt and enjoy the code journey!"
  );
});


app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/signup", async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const newCustomer = new Signup({
      firstName,
      lastName,
      username,
      email,
      password,
    });
    await newCustomer.save();
    res.status(201).send("Signup successful");
  } catch (err) {
    res.status(400).send("Signup unsuccessful. Error: " + err.message);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Signup.findOne({ username }); 
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }

    res.status(200).send("Login successful");
  } catch (err) {
    res.status(500).send("An error occurred during login. Error: " + err.message);
  }
});

app.listen(3001, () => {
  console.log("Server started on http://localhost:3001");
});
