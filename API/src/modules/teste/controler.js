const Sequelize = require("sequelize");
const service = require("./servico");
const bcrypt = require('bcrypt');

const createTeste = async(req,res) =>{

    
    // Função para criptografar a senha
    const senha = req.body.teste
    try {
        // Número de rounds (fatores de custo), quanto maior, mais seguro, mas mais lento
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const senhaCriptografada = await bcrypt.hash(senha, salt);
        const _teste ={
            teste: senhaCriptografada
        }
        await service.criarTeste(_teste)
    } catch (err) {
        console.error('Erro ao criptografar a senha:', err);
    }

}

module.exports = {
    createTeste
}