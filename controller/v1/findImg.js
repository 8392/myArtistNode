import AddressComponent from '../../prototype/addressComponent'
import findImgModel from '../../models/v1/findImg';
import formidable from 'formidable';

class FindImg extends AddressComponent {
    constructor() {
        super()
        this.userImg = this.userImg.bind(this);
    }
    async userImg(req, res, next) {  //注册
        let form = new formidable.IncomingForm();
        // form.parse(req, async (err, fields, files) => {

        //     // findImgModel.create(newUser);   //创建一个新用户，存入数据库    
            
        // });
    }
   
}

export default new FindImg;