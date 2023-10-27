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
  .get("/", getAllUsers)
  .get("/:id", getSingleUser)
  //create api - POST- /users
  .post("/", createUser)
  //update api - PUT - /users/:id
  .put("/:id", replaceUser)
  //PATCH - doesn't overwirte only update specific part
  .patch("/:id", updateUser)
  // Delete - DELETE
  .delete("/:id", deleteUser);
