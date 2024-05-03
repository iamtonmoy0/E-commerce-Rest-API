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
];
