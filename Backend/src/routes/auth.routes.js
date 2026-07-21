const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

const {
  registerValidation,
  loginValidation,
} = require("../validators/auth.validator");

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working",
  });
});

router.post(
  "/register",
  registerValidation,
  authController.register
);

router.post(
  "/login",
  loginValidation,
  authController.login
);

module.exports = router;