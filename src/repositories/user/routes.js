import userRepository from './userRepository';
import { seed } from '../../libs/seadData';
const express = require('express');
const router = express.Router();

router.route('/create')
.post(seed, userRepository.create);

export default router;