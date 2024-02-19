//Tạo đối tượng express
const express = require('express')
const router = express.Router();

//tạo route
const {getHomepage, getinfo}=require('../controllers/homecontroller')

// router.Method('/route',handler)
router.get('/',getHomepage);

router.post('/test',getinfo);
router.post('/haizuka',(req,res)=>{
    res.send('Hii HaiZuka')
})

module.exports=router; //export default 