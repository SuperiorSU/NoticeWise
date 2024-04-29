const express = require('express');
const router = express.Router();

const {login,signup,deleteUser,getAllStudents} = require('../controllers/userController')

const {adminLogin,adminSignup} = require('../controllers/adminController')

const {createNotice,deleteNotice,getNotices} = require('../controllers/noticeController')

// mounting user routes
router.post('/signup',signup)
router.post('/login',login)
router.delete('/delete/:id',deleteUser)
router.get('/students',getAllStudents)

// mounting notice routes
router.post('/createNotice',createNotice)
router.get('/getNotices',getNotices)
router.delete('/deleteNotice/:id',deleteNotice)

// mounting admin routes
router.post('/adminSignup',adminSignup)
router.post('/adminLogin',adminLogin)

module.exports = router;