const express = require("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, (error) => {
  if (!error) {
    console.log("Server is running on port 3000");
  } else {
    console.log("error in server js page" + error);
  }
});

app.get("/", (res) => {
  res.send("Hello World");
});

app.post("/api/users", (req, res) => {
  const { name, rollno, mothername } = req.body;
  console.log(req.body);
  console.log(rollno, mothername);
  console.log(name);
  res.send("User created");
});
