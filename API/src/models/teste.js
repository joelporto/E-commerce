const Sequelize = require("sequelize");

const teste = sequelizeProject.define('teste', {
teste: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: true
},
updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,

},
createdAt: {
    type: Sequelize.DATE,
    allowNull: false
}
})

module.exports = teste