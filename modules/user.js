const dbConfig = require('../config/dbconfig')
const Sequelize = require('sequelize')
const sequelize = dbConfig.sequelize

const User = require('../schema/user')
const userModel = User(sequelize, Sequelize.DataTypes)

class UserModel {
    static async createUser(data) {
        await userModel.sync() //This create table if it doesn't exist,and does nothing if it already exist
        return await userModel.create({
            ...data
        })
    }
}

module.exports = UserModel