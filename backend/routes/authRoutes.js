const express =
  require("express");

const router =
  express.Router();

const {
  register,
  login,
  getProfile
} =
  require("../controllers/authController");

const {
  registerValidation,
  loginValidation
} =
  require("../validations/authValidation");

const validateRequest =
  require("../middlewares/validateRequest");

const authMiddleware =
  require("../middlewares/authMiddleware");

router.post(
  "/register",
  registerValidation,
  validateRequest,
  register
);

router.post(
  "/login",
  loginValidation,
  validateRequest,
  login
);

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

module.exports = router;