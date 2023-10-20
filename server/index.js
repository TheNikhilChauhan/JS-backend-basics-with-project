import express from "express";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import dbConnect from "./mongoDB/config.js";

const server = express();
dotenv.config();
dbConnect();
//middleware

//body parser or built in middleware
server.use(express.json());
// server.use(express.urlencoded());

// server.use(express.static())

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

server.use((req, res, next) => {
  console.log(req.body.password);
  next();
});

server.use("/api/v1", productRouter);
server.use("/api/v1", userRouter);

// APi - endpoint
// also route level middleware: auth

//products
//GET - /products - READ
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
