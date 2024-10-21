const Sequelize = require('sequelize')

const sequelize = new Sequelize('project', 'root' , 'lima1806', {
   host: 'localhost',
   dialect: 'mysql',
   port: '3306',
   logging: true 
});

module.exports = async () => {
    let promise = await new Promise(function(resolve, reject) {
        sequelize
        .authenticate()
        .then(() => {
            console.log('Connected to Schema')
            resolve(sequelize)
        })
        .catch(err => {
            console.log('Not connected to Schema')
            console.log(err)
            reject()
        })
    })

    return promise
}