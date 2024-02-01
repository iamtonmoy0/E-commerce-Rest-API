import Express, { Router } from "express";
import {
  getUserByIdController,
  getUsersController,
} from "../../controllers/user.controller";

Router.route("/").get(getUsersController);
Router.route("/:id").get(getUserByIdController);

export default Router;
