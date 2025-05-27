const express = require("express");
const AuthRouter = express.Router();
const AuthController = require("../Controllers/AuthController");


AuthRouter.post("/signup", AuthController.SignUp);
AuthRouter.post("/login", AuthController.Login);

module.exports = AuthRouter;

