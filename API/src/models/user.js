const Sequelize = require("sequelize");

const user = sequelizeProject.define('usuario', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true

    },
    email: {
        type: Sequelize.STRING,
        allowNull: true

    },
    password: {
        type: Sequelize.STRING,
        allowNull: true

    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true

    },
    dob: {
        type: Sequelize.STRING,
        allowNull: true

    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true

    },
    address: {
        type: Sequelize.STRING,
        allowNull: true

    },
    city: {
        type: Sequelize.STRING,
        allowNull: true

    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: true

    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: true

    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: true

    },
    numero: {
        type: Sequelize.STRING,
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

module.exports = user