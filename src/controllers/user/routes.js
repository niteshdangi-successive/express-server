import { UserController } from "./controller";
import userValidation from "./validation";
import validationHandler from "../../libs/validationHandler";
import { authMiddleWare } from "../../libs/routes/authMiddleWare";
const express = require('express');
const router = express.Router();
const userController = new UserController();


router.route('/login')
.post(validationHandler(userValidation.create),userController.userLogin,authMiddleWare('module','permissionType'))

export default router;