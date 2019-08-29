'use strict';

import captchapng from 'captchapng';

class Captchas {
	constructor(){

	}
	//验证码
	async getCaptchas(req, res, next){
        const cap = parseInt(Math.random()*9000+1000);
    	const p = new captchapng(80,30, cap);
        p.color(25, 56, 15, 56); 
        p.color(80, 80, 80, 255);
        const base64 = p.getBase64();
        res.cookie('cap', cap, { maxAge: 300000, httpOnly: true });  //存入cookie用于登录的时候判断是否过期
        res.send({
            code: 1,
        	data: 'data:image/png;base64,' + base64
        });
	}
}

export default new Captchas()