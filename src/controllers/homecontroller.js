const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const postcreate_user =async (req, res) => {
    console.log('>>> reg.body:', req.body)
    let fname = req.body.fname;
    let email = req.body.email;
    let address = req.body.address;
    const [results,fields]= await connection.query(
        ` INSERT INTO Users(email,name,city) VALUES(?,?,?) `, [email, fname, address],

    )
    console.log("check results",results)
}

const getcreatepage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage, postcreate_user, getcreatepage
}