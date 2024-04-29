const mongoose = require('mongoose')

const noticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        required:true,
        default: Date.now()
    },
    batch:{
        type:String,
        required:true,
        enum:["Super60","The Uniques", "Academics"],
    },
})

module.exports = mongoose.model('Notice', noticeSchema)