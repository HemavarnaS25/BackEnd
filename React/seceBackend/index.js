const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const Signup = require("./models/signupSchema");
const bcrypt = require('bcrypt');
const cors = require("cors");

app.use(cors());
app.use(express.json());

mdb.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDb connection unsuccessful", err);
  });


app.get('/', (req, res) => {
  res.send("Welcome to Backend friends")
})

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/signup", async (req, res) => {
  var { firstName, lastName, userName, email, password } = req.body;
  var hashedPassword = await bcrypt.hash(password, 15);
  console.log(hashedPassword);
  try {
    console.log("Inside try");
    const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    console.log(newCustomer);
    newCustomer.save();
    res.status(201).send({response:"signup successfull",signupStatus:true});
  } catch (err) {
    res.status(400).send("Signup Unsuccessfull", err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Signup.findOne({ email: email });
    if (!user) {
      return res.status(404).send({response:"User not found",loginStatus:false});
    }

    if (bcrypt.compare(user.password , password)) {
      res.status(200).send({response:"Login successful",loginStatus:true});
    } else {
      res.status(401).send({response:"Incorrect password",loginStatus:false});
    }
  } catch (err) {
    res.status(500).send("Error during login");
  }
});

/*app.put('/updateuser', async (req, res) => {
 const { id, ...updates } = req.body; 

 try {
   const updatedUser = await Signup.findByIdAndUpdate(id, updates, { new: true });
   if (!updatedUser) {
     return res.status(404).send("User not found");
   }
   res.status(200).send("User details updated successfully");
 } catch (err) {
   res.status(500).send("Error updating user details");
 }
}); */

app.post('/updateuser', async (req, res) => {

  try {
    const updatedUser = await Signup.findOneAndUpdate({ firstName: "Bavanetha" }, { $set: { userName: "Bava@27" } });
    console.log(updatedUser)
    res.json("updatedUser now");
    updatedUser.save();
  } catch (err) {
    res.status(500).send("Error updating user details");
  }
});

app.delete('/deleteuser', async (req, res) => {
  const { id } = req.body;

  try {
    const deletedUser = await Signup.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting user");
  }
});

app.get('/getsignupdet', async (req, res) => {
  var signUpdet = await Signup.find()
  res.status(200).json(signUpdet);
})

app.listen(3001, () => {
  console.log("server connected")
})