'use strict';

const validarCpf = () =>{
    const cpf = document.getElementById("cpf").value

    let strCpf = String(cpf).replace(/[^\d]/g, '')
    
    if(cpf.length !== 11){
        alert("CPF não possui 11 digitos")
        return
    }if([
        '0000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCpf) !== -1){
            alert("CPF invalido!")
            return validarCpf
        }

    const digitoVerificador = (cpfincompleto) =>{
        let somatoria = 0
        for(let i = 0; i < cpfincompleto.length; i++) {
            let digito = cpfincompleto.charAt(i)
            let constante = (cpfincompleto.length + 1 - i)
            somatoria += Number(digito) * constante
        }
        const resto = somatoria % 11

        return resto < 2 ? "0" : (11 - resto).toString()
        }

        let primeiro = digitoVerificador(cpf.substring(0,9))
        let segundo = digitoVerificador(cpf.substring(0,9) + primeiro)

        let cpfCorreto = cpf.substring(0,9) + primeiro + segundo

        if(cpf !== cpfCorreto){
            alert("CPF não e valido na receita federal")
            return validarCpf
        }
}

document.getElementById("btn").addEventListener("click", validarCpf)


const limparformulario =(endereco) =>{
    
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('neighborhood').value = '';
}

const preencherFormulario =(endereco) =>{
    
    document.getElementById('address').value = endereco.logradouro;
    document.getElementById('city').value = endereco.localidade
    document.getElementById('state').value = endereco.uf
    document.getElementById('neighborhood').value = endereco.bairro
}

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep) ;

const pesquisarCep = async() =>{
    limparformulario()
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        document.getElementById('address').value = 'CEP não encontrado!';
    }else {
    preencherFormulario(endereco)
        }
    }else{
        document.getElementById('address').value = 'CEP incorreto!';
    }
}

document.getElementById('cep').addEventListener('focusout',pesquisarCep)

let dados = {}

document.getElementById('btn').addEventListener('click', function(){
    
    let Name = document.querySelector("#name").value;
    dados['name'] = Name;
    let Cpf = document.querySelector('#cpf').value;
    dados['cpf'] = Cpf
    let Email = document.querySelector('#email').value;
    dados['email'] = Email
    let Password = document.querySelector('#password').value;
    dados['password'] = Password
    let Phone = document.querySelector('#phone').value;
    dados['phone'] = Phone
    let Dop = document.querySelector('#dob').value;
    dados['dob'] = Dop
    let Gender = document.querySelector('#gender').value;
    dados['gender'] = Gender
    let Address = document.querySelector('#address').value;
    dados['address'] = Address
    let City = document.querySelector('#city').value;
    dados['city'] = City
    let State = document.querySelector('#state').value;
    dados['state'] = State
    let Cep = document.querySelector('#cep').value;
    dados['cep'] = Cep
    let Neighborhood = document.querySelector('#neighborhood').value;
    dados['neighborhood'] = Neighborhood
    let Complemento = document.querySelector('#complemento').value;
    dados['complemento'] = Complemento
    let Numero = document.querySelector('#numero').value;
    dados['numero'] = Numero
    
    fetch('http://127.0.0.1:3000/cadastro',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(
            window.location.href = '../login/index.html'
    ).catch(res =>{
        alert({
            icon: 'error',
            title: 'Oops...',
            text: 'algo deu errado',  
            footer: `<label>Contate o administrador: ${res}</label>`,
            timer: 2000,
            })
    })
    
})





