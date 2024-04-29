const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async (req,res) =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            console.log('Database connected successfully')
        })
    }
    catch(err){
        console.log(err)
        return({
            success:false,
            message:'Database connection failed'
        })
    }
}

module.exports = dbConnect;