const sequelize = require("sequelize")
const userModel = require("../../../models/user")

const validarUserBd = async(req,res) =>{
    let result = await userModel.findOne({
        where:{
            cpf: req.body.cpf
        }
    }).catch((err) =>{
        console.log(err)
    })
    return result
}

const criarUser = async(_user) =>{
    
    await userModel.create(_user).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    criarUser,
    validarUserBd
}