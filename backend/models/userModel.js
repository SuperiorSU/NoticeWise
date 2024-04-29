const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { type } = require('@testing-library/user-event/dist/type');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    batch:{
        type:String,
        enum:["Super60","The Uniques", "Academics"],
    },
    role:{
        type:String,
        required:true,
        enum:["Student","Admin"],
        default:"Student"
    }
});

module.exports = mongoose.model('User', userSchema);