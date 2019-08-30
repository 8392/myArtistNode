'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities'
import Captchapng from '../controller/v1/captchas'
import FindImg from '../controller/v1/findImg'
import BaseComponent from '../prototype/baseComponent'
const baseHandle = new BaseComponent();
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.post('/captchas', Captchapng.getCaptchas);
router.post('/addimg/:type', baseHandle.uploadImg);
router.post('/findimg', FindImg.userImg);
 
export default router