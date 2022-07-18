import { UserController } from "./controller";
import userValidation from "./validation";
import validationHandler from "../../libs/validationHandler";
import { authMiddleWare } from "../../libs/routes/authMiddleWare";
const express = require('express');
const router = express.Router();
const userController = new UserController();


router.route('/')
// .post(validationHandler(userValidation.create),authMiddleWare('getUsers','write'),userController.userLogin)
.post(userController.userLogin,authMiddleWare('getUsers','write'))

export default router;