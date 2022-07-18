import userRepository from './userRepository';
import { seed } from '../../libs/seadData';
const express = require('express');
const router = express.Router();

router.route('/create')
.post(userRepository.create)
router.route('/')
.get(userRepository.get)
router.route('/:id')
.get(userRepository.get)
.put(userRepository.update)
.delete(userRepository.delete)

export default router;