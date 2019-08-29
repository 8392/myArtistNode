'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities'
import Captchapng from '../controller/v1/captchas'
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.post('/captchas', Captchapng.getCaptchas);
 
export default router