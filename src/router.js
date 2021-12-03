import { traineeRouter } from "./controllers/trainee/index";

const express = require('express');
const mainRoutes = express.Router();

mainRoutes.use('/trainee',traineeRouter);

export default mainRoutes;