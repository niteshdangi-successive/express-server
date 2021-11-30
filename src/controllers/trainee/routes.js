import { TraineeController } from './controller';
import  validationHandler  from '../../libs/validationHandler';
import  validation  from './validation';
const express = require('express');
const router = express.Router();
const traineeController = new TraineeController();

router.route('/')

.post(validationHandler(validation.create),traineeController.traineePostRoute)
.get(validationHandler(validation.get),traineeController.traineeGetRoute)

// .get('/',traineeController.traineePostRoute)
// .put('/',traineeController.traineePutRoute)
// .delete('/',traineeController.traineeDeleteRoute)

export default router;