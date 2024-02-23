//Tạo đối tượng express
const express = require('express')
const router = express.Router();

//tạo route
const {getHomepage, postcreate_user,getcreatepage}=require('../controllers/homecontroller')

// router.Method('/route',handler)
router.get('/',getHomepage);
router.post('/create_user',postcreate_user);
router.get('/create',getcreatepage)

module.exports=router; //export default 