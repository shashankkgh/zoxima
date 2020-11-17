const mongoose = require('mongoose')
const BaseModel = require('../base')
const schema = mongoose.Schema

const USER_COLLECTION = 'user'
const USER_SCHEMA = new schema({
    username: String,
    password: String,
    role: String
})

const MODEL = mongoose.model(USER_COLLECTION, USER_SCHEMA)

class UserModel extends BaseModel {
    constructor() {
        super(USER_COLLECTION, MODEL, USER_SCHEMA)
    }

    findUserById (id, role) {
        return this.model.findOne({ username: id, role: role })
    }
}

module.exports = UserModel