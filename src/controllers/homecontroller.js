const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const create_user = (req, res) => {
    console.log('>>> reg.body:', req.body)
    let fname = req.body.fname;
    let email = req.body.email;
    let address = req.body.address;
    connection.query(
        ` INSERT INTO Users(email,name,city)
VALUES(?,?,?) `
        , [email, fname, address],
        function (err, results) {
            console.log(results);
            res.send('create use succers')
        }
    )
}
const getcreatepage=(req,res)=>{
    res.render('create.ejs')
}
module.exports = {
    getHomepage, create_user,getcreatepage
}