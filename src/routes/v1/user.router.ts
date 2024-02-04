import Express, { Router } from "express";
import {
  getUserByIdController,
  getUsersController,
  registerUserController,
  removeUserByIdController,
} from "../../controllers/user.controller";

Router.route("/").get(getUsersController);
Router.route("/:id")
  .get(getUserByIdController)
  .delete(removeUserByIdController);
Router.route("/register").post(registerUserController);

export default Router;
