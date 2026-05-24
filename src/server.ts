// Architectural pattent: MVC, Dependency Injection,MVP

// Design pattern: Middleware, Decorator

// ==== Esma/Module Js ====
// import moment from "moment";
// ==== common js ====
// // const moment = require('moment');
// console.log("PORT:", process.env.PORT);
// console.log("MONGO_URL:", process.env.MONGO_URL);

console.log("Start");

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Succesfully connected:");
    const PORT = process.env.PORT;
  })
  .catch((err) => {
    console.log("ERROR on connection with mongodb:", err);
  });
