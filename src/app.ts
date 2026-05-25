import express from "express";
import path from "path";
import router from "./router";

/** 1) ENTRENCE **/
// ==== check the __dirname === later I will clean
// console.log("__dirname:", __dirname);
// console.log("__filename:", __filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/** 2) SESSION **/

/** 3) VIEW **/
app.set("views", path.join(__dirname, "views"));
app.set("engine view", "ejs");

/** 4) ROUTERS **/

app.use("/", router);

export default app; // module.exports = app;
