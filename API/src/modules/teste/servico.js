const sequelize = require("sequelize")
const userModel = require("../../models/teste")


const criarTeste = async(_teste) =>{
    
    await userModel.create(_teste).catch((err)=>{
        console.log(err)
    })
}


module.exports = {
    criarTeste
}
