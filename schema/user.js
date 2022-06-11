const moment = require('moment')

module.exports = function (sequelize, Datatypes) {
    return sequelize.define('user', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            field: 'username'
        },
        pwd: {
            type: Datatypes.STRING,
            allowNull: false,
            field: 'pwd'
        },
        role: {
            type: Datatypes.STRING,
            allowNull: false,
            field: 'role'
        },
        createdAt: {
            type: Datatypes.DATE
        },
        updatedAt: {
            type: Datatypes.DATE
        }
    }, {
        freezeTableName: true
    })
}