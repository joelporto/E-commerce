const loginModel = require("../../../models/user")
const sequelize = require("sequelize")

const validarBD = async (req, res) =>{
    
    let result = await loginModel.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        },
    }).catch((err)=>{
        console.log(err)
    })
    return result
}

function confirmarLogin(res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        a:1
    }));
    return res;

}

module.exports = {
    validarBD,
    confirmarLogin
}