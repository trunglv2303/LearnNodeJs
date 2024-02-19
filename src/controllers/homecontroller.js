const connection=require('../config/database')

const getHomepage=(req,res)=>{
    return res.render('home.ejs')
}
const getinfo=(req,res)=>{
    // res.send('Hello world with by Le Van Trung');

}
module.exports={
    getHomepage,getinfo
}