const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// signup for admin
exports.adminSignup = async (req, res) => {
    try {
        // get data
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist",
            });
        }
        // hash the password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err){
            console.log(err)
            return res.status(500).json({
                success:false,
                message: "Hashing failed"
            })
        }
        // create user entry
        const newAdmin = await User.create({
            name,
            email,
            password: hashedPassword,
            role:"Admin",
        });
        return res.status(200).json({
            success: true,
            message: "Admin created successfully",
          });
        } catch (err) {
          console.error(err);
          return res.status(500).json({
            success: false,
            message: "Something went wrong while creating the admin",
          });
        }
};

// login for admin
exports.adminLogin = async (req, res) => {
    try {
        // get data
        const { email, password } = req.body;

        // check if user exists
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }

        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        // check role
        if(user.role!=="Admin"){
            return res.status(400).json({
                success:false,
                message:"Invalid role"
            })
        }
        // create token
        // const token = jwt.sign({id:user._id, role:user.role}, process.env.SECRET, {expiresIn: '3h'});
        return res.status(200).json({
            success:true,
            message:"Admin logged in successfully",
            // token
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Cannot get the admin to log in"
        })
    }
}
