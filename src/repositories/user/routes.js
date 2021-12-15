import userRepository from './userRepository';
import { seed } from '../../libs/seadData';
const express = require('express');
const router = express.Router();

router.route('/create')
.post(seed, userRepository.create)
router.route('/')
.get(userRepository.read)
router.route('/:id')
.get(userRepository.read)
.put(userRepository.update)
.delete(userRepository.delete)

export default router;