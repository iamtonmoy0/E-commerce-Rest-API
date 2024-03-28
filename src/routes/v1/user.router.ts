import { Router } from "express";
import {
  activateUserAccountController,
  getUserByIdController,
  getUsersController,
  registerUserController,
  removeUserByIdController,
} from "../../controllers/user.controller";
import upload from "../../middlewares/uploadFile";

const router = Router();

router.route("/register").post(upload.single("image"), registerUserController);
router.route("/verify").post(activateUserAccountController);
router.route("/").get(getUsersController);
router
  .route("/:id")
  .get(getUserByIdController)
  .delete(removeUserByIdController);

export default router;
