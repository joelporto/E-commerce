const Sequelize = require("sequelize");
const service = require("./servico");
const bcrypt = require('bcrypt');



// Função para criptografar a senha

const createTeste = async(req,res) =>{
    let validar = await service.validarTeste(req)
    async function criptografarSenha(validar) {
        try {
            // Número de rounds (fatores de custo), quanto maior, mais seguro, mas mais lento
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const senhaCriptografada = await bcrypt.hash(validar, salt);
            return senhaCriptografada;
        } catch (err) {
            console.error('Erro ao criptografar a senha:', err);
        }
    }
    
    // Função para verificar se a senha corresponde à senha criptografada
    async function verificarSenha(validar, hash) {
        const match = await bcrypt.compare(validar, hash);
        return match;
    }
    
    // Exemplo de uso
    (async () => {
        const senhaCriptografada = await criptografarSenha(validar);
        console.log('Senha criptografada:', senhaCriptografada);
    
        // Verificando a senha
        const match = await verificarSenha(validar, senhaCriptografada);
        console.log('A senha está correta?', match);
    })();
    
    
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
    createTeste
}

