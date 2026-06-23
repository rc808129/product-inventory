const { body } = require("express-validator");

exports.productValidation = [

  body("productName")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3 })
    .withMessage(
      "Product name must be at least 3 characters"
    ),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage(
      "Price must be greater than zero"
    ),

  body("quantity")
    .isInt({ min: 0 })
    .withMessage(
      "Quantity cannot be negative"
    ),

  body("status")
    .isIn(["Active", "Inactive"])
    .withMessage("Invalid status")
];