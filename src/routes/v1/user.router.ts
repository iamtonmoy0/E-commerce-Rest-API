import { Router } from "express";
import {
  activateUserAccountController,
  getUserByIdController,
  getUsersController,
  registerUserController,
  removeUserByIdController,
} from "../../controllers/user.controller";
import upload from "../../middlewares/uploadFile";
import { registrationValidation } from "../../middlewares/auth.validation";
import { runValidation } from "../../middlewares";

const router = Router();

router
  .route("/register")
  .post(registrationValidation,runValidation, upload.single("image"), registerUserController);
router.route("/verify").post(activateUserAccountController);
router.route("/").get(getUsersController);
router
  .route("/:id")
  .get(getUserByIdController)
  .delete(removeUserByIdController);

export default router;
