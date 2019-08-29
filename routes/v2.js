'use strict';

import express from 'express'
import User from '../controller/v2/user'
const router = express.Router();

router.post('/register', User.register);
router.post('/login', User.login);
 
export default router