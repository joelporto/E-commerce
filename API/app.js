const express = require('express');
const app = express();
const Q = require('q');
const bodyParce = require('body-parser');
const sequelize = require('sequelize');

const init = () =>{
    Q.fcall(async () => {
        let mysqlConnectionProject = require("./src/config/mysql")
        global.sequelizeProject = await mysqlConnectionProject()
    }).then(async () => {

        app.use(bodyParce.urlencoded({
            extended: false
        }));

        app.use(bodyParce.json());

        app.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
          });

          let registroUser = require('./src/modules/cadastroUser/Routes/index')
          app.use('/cadastro', registroUser)

          let loginUser = require('./src/modules/login/routes/index')
          app.use('/login', loginUser)

          let teste = require('./src/modules/teste/rotas')
          app.use('/teste', teste)

          let teste2 = require('./src/modules/teste2/rotas')
          app.use('/teste2', teste2)
          
        app.listen(3000)
    }).catch(err => {
        console.log(err)
    })
}

init()