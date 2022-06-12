const dbConfig = require('../config/dbconfig')
const { DataTypes } = require('sequelize')
const sequelize = dbConfig.sequelize

const User = require('../schema/user')
const userModel = User(sequelize, DataTypes)


class UserModel {
    static async createUser(restraint) {
        await userModel.sync() //This create table if it doesn't exist,and does nothing if it already exist
        return await userModel.create(restraint)
    }

    static async findUser(restraint) {
        return await userModel.findAll(restraint)
    }

    static async updateUser(restraint) {
        return await userModel.update(target, restraint)
    }

    static async deleteUser(restraint) {
        return await userModel.destroy(restraint)
    }
}

module.exports = UserModel