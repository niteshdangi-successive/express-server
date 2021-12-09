import { traineeRouter } from "./controllers/trainee/index";
import { userRouter } from "./controllers/user";

const express = require('express');
const mainRoutes = express.Router();

mainRoutes.use('/trainee', traineeRouter);
mainRoutes.use('/user', userRouter);

export default mainRoutes;