'use strict';

import mongose from 'mongoose'

const Schema = mongose.Schema;

const userSchema = new Schema({
    imgUrl: {type: String, default: ''},
})

const Imgurl = mongose.model('imgUrl', userSchema);

export default Imgurl;