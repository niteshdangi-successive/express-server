import { traineeRouter } from "./controllers/trainee/index";
import { userRouter } from "./controllers/user";
import { userRepositoryRoutes } from "./repositories/user/index";

const express = require('express');
const mainRoutes = express.Router();

mainRoutes.use('/trainee', traineeRouter);
mainRoutes.use('/dummy-user', userRouter);
mainRoutes.use('/user', userRepositoryRoutes);

export default mainRoutes;