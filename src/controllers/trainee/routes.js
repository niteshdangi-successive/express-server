import { traineeController } from './controller';
const express = require('express');
const router = express.Router();
const trainee_controller = new traineeController();

router.get('/',trainee_controller.trainee_get_route);

router.post('/',trainee_controller.trainee_get_route);

router.put('/',trainee_controller.trainee_get_route);

router.delete('/',trainee_controller.trainee_get_route);

export default router;