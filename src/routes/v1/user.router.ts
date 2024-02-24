import { Router } from "express";
import {
  getUserByIdController,
  getUsersController,
  registerUserController,
  removeUserByIdController,
} from "../../controllers/user.controller";

const router = Router();

router.route("/register").post(registerUserController);
router.route("/").get(getUsersController);
router
  .route("/:id")
  .get(getUserByIdController)
  .delete(removeUserByIdController);

export default router;
