import { body } from "express-validator";
// registration validation
export const registrationValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "name should be minimum 3 characters long and maximum 30 characters"
    ),
  body("email").trim().notEmpty().withMessage("Email  is required"),
  body("password")
    .notEmpty()
    .withMessage("Password cant be empty")
    .isLength({ min: 6, max: 20 })
    .withMessage(
      "Password should be minimum 6 characters long and maximum 20 characters"
    ),
];
