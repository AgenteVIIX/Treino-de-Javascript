const stockModel = require('../models/Stock.js')

module.exports = class ServiceUser {

    //insert
    async create(data) {
        await stockModel(data).save()
    }

    //selectOne
    async selectOne(id) {
        return await stockModel.findById(id)
    }
    
    async select() {
        return await stockModel.find({})
    }
}