'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities'
const router = express.Router();

router.get('/cities', CityHandle.getCity);
 
export default router