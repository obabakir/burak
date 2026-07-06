import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_CONFIG } from "./libs/config";
import { T } from "./libs/types/common";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});
/** 1) ENTRENCE **/
// ==== check the __dirname === later I will clean
// console.log("__dirname:", __dirname);
// console.log("__filename:", __filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads")); // for images
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(MORGAN_CONFIG));
// ==== \n --> yangi qator tashlash mantigi

/** 2) SESSION **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: { maxAge: 1000 * 3600 * 6 }, //  6 hours
    store: store,
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3) VIEW **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4) ROUTERS **/

app.use("/admin", routerAdmin); // EJS (BSSR uchun)
app.use("/", router); // REACT (SPA uchun)

export default app; // module.exports = app;
