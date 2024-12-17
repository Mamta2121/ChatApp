//entry point of the project

//const express = require('express'); //After ES6, we can use import in ja //for this add "type": "module" in package.json
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./route/user.route.js";

const app = express();
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("mongodb connected");
} catch (error) {
  console.log(error);
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use( "/user", router);
app.listen(PORT, () => {
  console.log("Server Connected");
});
