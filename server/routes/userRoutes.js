import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const userRouter = express.Router();

export default userRouter
  .get("/users", getAllUsers)
  .get("/users/:id", getSingleUser)
  //create api - POST- /users
  .post("/users", createUser)
  //update api - PUT - /users/:id
  .put("/users/:id", replaceUser)
  //PATCH - doesn't overwirte only update specific part
  .patch("/users/:id", updateUser)
  // Delete - DELETE
  .delete("/users/:id", deleteUser);
