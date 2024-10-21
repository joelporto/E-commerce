const sequelize = require("sequelize")
const userModel = require("../../models/teste")

const validarTeste = async (req, res) =>{
    
    const result = await userModel.findAll(
        {
        where:{
            teste: req.body.teste
        }
    })

    console.log(result)
    
}


module.exports = {
    validarTeste
}

