import AddressComponent from '../../prototype/addressComponent'
import UserModel from '../../models/v2/user.js';
import formidable from 'formidable';
import crypto from 'crypto';
import dtime from 'time-formater';

class User extends AddressComponent {
    constructor() {
        super()
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.encryption = this.encryption.bind(this);
    }
    async register(req, res, next) {  //注册
        let form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            try{
                const {username, password, captcha_code} = fields;
                try{
                    if (!username) {
                        throw new Error('用户名参数错误');
                    }else if(!password){
                        throw new Error('密码参数错误');
                    }
                }catch(err){
                    res.send({
                        status: 0,
                        type: 'ERROR_QUERY',
                        message: err.message,
                    })
                    return
                }

                const user = await UserModel.findOne({username});
                const newpassword = this.encryption(password);
                
                if(!user) {  //如果没有用户
                    const user_id = await this.getId('user_id');
                    const newUser = {username, password: newpassword, user_id};
                    
                    UserModel.create(newUser);   //创建一个新用户，存入数据库
                    
                    res.send({
                        cdoe: 1,
                        message: '注册成功',
                    })
                }else{   //已经注册的情况
                    res.send({
                        cdoe: -1,
                        message: '该用户已注册',
                    })
                }
            }catch(err){  //注册参数错误
                res.send({
                    code: 0,
                    type: 'ERROR_QUERY',
                    message: err.message,
                })
            }
            
        });
    }
    encryption(password){
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
	Md5(password){
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
    async login(req, res, next) {  //登录
        let form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const {username, password} = fields;
            const user = await UserModel.findOne({username});
            try{
                if (!username) {
                    throw new Error('用户名参数错误');
                }else if(!password){
                    throw new Error('密码参数错误');
                }
            }catch(err){
                res.send({
                    code: 0,
                    type: 'ERROR_QUERY',
                    message: err.message,
                })
                return
            }
            if(!user){  //验证用户名
                res.send({
                    code: 0,
                    message: '用户名不存在'
                })
                return;
            }
            //验证密码
            if(user.password.toString() != this.encryption(password)){   //
                res.send({
                    code: 0,
                    message: '密码错误'
                })
            }
            // 登录成功返回用户信息给前端
            // const userinfo = await UserInfoModel.findOne({user_id: user.user_id}, '-_id');
            // req.session.user_id = user.user_id;
            res.send({
                code: 1,
                message: '登录成功'
            })
  
        })
    }
}

export default new User;