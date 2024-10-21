const service = require("../service/index")
const sequelize = require("sequelize")

const validarBD = async (req,res) => {
    var err = []

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        err.push({texto: "E-mail invalido! "})
    }

    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null ) {
        err.push({texto: "Senha invalida!"})
    }

    if(err.length > 0){
        res.status(400).send({mensagem: err});
        return req
    }

    let validar = await service.validarBD(req)
    if(validar) {
        return res.json({
            userValid: true,
        })
    }else{
        return res.json({
            userValid: false,
        })
    }
}

module.exports = {
    validarBD
}