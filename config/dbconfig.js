const Sequelize = require('sequelize')
class dbConfig {
    static dbname = 'musicdb'
    static username = 'root'
    static password = 'root'
}
const sequelize = new Sequelize(dbConfig.dbname, dbConfig.username, dbConfig.password, {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    dialectOptions: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    timezone: '+08:00'
})

module.exports = { sequelize: sequelize }