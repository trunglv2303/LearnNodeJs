//Tạo đối tượng express
const express = require('express')
const router = express.Router();

//tạo route
const {getHomepage, create_user,getcreatepage}=require('../controllers/homecontroller')

// router.Method('/route',handler)
router.get('/',getHomepage);

router.post('/create_user',create_user);
router.get('/create',getcreatepage)

module.exports=router; //export default 