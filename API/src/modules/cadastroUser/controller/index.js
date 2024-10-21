const Sequelize = require("sequelize");
const service = require("../Service/index");

const createUser = async(req,res) =>{
    var err = []

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        err.push({texto: "E-mail invalido"})
    }
    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null){
        err.push({texto: "Senha invalido"})
    }
    if(!req.body.phone || typeof req.body.phone == undefined || req.body.phone == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.dob || typeof req.body.dob == undefined || req.body.dob == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.gender || typeof req.body.gender == undefined || req.body.gender == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.address || typeof req.body.address == undefined || req.body.address == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.city || typeof req.body.city == undefined || req.body.city == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.state || typeof req.body.state == undefined || req.body.state == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.neighborhood || typeof req.body.neighborhood == undefined || req.body.neighborhood == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.complemento || typeof req.body.complemento == undefined || req.body.complemento == null){
        err.push({texto: "Nome invalido"})
    }
    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero == null){
        err.push({texto: "Nome invalido"})
    }

    let validarUser = await service.validarUserBd(req)

    if(validarUser){
        res.status(400).send({mensagem: "Erro CPF ja cadastrado"})
        return
    }else{
        res.status(200).send({mensagem: "Cadastrado com sucesso"})
    }

    const _user ={ 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        cpf: req.body.cpf,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        cep: req.body.cep,
        neighborhood: req.body.neighborhood,
        complemento: req.body.complemento,
        numero: req.body.numero,
    }

    await service.criarUser(_user)
    
}

module.exports = {
    createUser
}