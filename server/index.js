import express from "express";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import dbConnect from "./mongoDB/config.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const server = express();
dotenv.config();
dbConnect();
//middleware
server.use(cors());
//body parser or built in middleware
server.use(express.json());
// server.use(express.urlencoded());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

//application level middleware
// server.use((req, res, next) => {
//   console.log(req.method, req.ip, req.hostname);
//   next();
// });

// const auth = (req, res, next) => {
//   console.log(req.query);
//   if (req.query.password === "123") {
//     next();
//   } else {
//     res.sendStatus(400);
//   }
// };

// server.use(auth);

// server.use((req, res, next) => {
//   console.log(req.body.password);
//   next();
// });

server.use("/products", productRouter);
server.use("/users", userRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// APi - endpoint
// also route level middleware: auth

//products
//GET - /products - READ
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
