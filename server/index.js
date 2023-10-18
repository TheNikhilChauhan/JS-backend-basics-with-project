import express from "express";
import data from "./data.json" assert { type: "json" };
const products = data.products;
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

// APi - endpoint
// also route level middleware: auth

//products
//GET - /products - READ
server.get("/products", (req, res) => {
  res.json(products);
});

server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  if (product) {
    console.log(product);
  }
  res.json(product);
});

//create api - POST- /products
server.post("/products", (req, res) => {
  console.log(req.body);
  const product = products.push(req.body);
  res.status(201).json(product);
});

//update api - PUT - /products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);

  const updateProduct = products.splice(productIndex, 1, {
    ...req.body,
    id: id,
  });
  res.status(201).json(updateProduct);
});

//PATCH - doesn't overwirte only update specific part
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  const updateProduct = products.splice(productIndex, 1, {
    ...product, //old products
    ...req.body, // updated part of the product, second part will overwrite the first part in patch
  });
  res.status(201).json(updateProduct);
});

// Delete - DELETE
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.json(product);
});

server.listen(8080, () => {
  console.log("server started at port: 8080");
});
