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
import app from "./app";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Mongodb connected successfully:");
    const PORT = process.env.PORT;
    app.listen(PORT, function () {
      console.info(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => {
    console.log("ERROR on connection with mongodb:", err);
  });
