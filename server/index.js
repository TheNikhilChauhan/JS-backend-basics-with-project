import express from "express";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

const server = express();

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

server.listen(8080, () => {
  console.log("server started at port: 8080");
});
