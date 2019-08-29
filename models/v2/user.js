'use strict';

import mongose from 'mongoose'

const Schema = mongose.Schema;

const userSchema = new Schema({
    user_id: Number,
    username: String,
    password: String,
})

const User = mongose.model('User', userSchema);

export default User;