const userModel = require('../models/User.js')

module.exports = class ServiceUser {

    //insert
    async create(data) {
        await userModel(data).save()
    }

    //select
    async select() {
        return await userModel.find({})
    }

    //update
    async update(id, data) {
        await userModel.findByIdAndUpdate(id, data)
    }

    //delete
    async remove(id) {
        await userModel.findByIdAndDelete(id)
    }

    //selectOne
    async selectOne(id) {
        return await userModel.findById(id)
    }
}