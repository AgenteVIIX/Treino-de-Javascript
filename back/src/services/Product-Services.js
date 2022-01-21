const productModel = require('../models/Product.js')

module.exports = class ServiceUser {

    //insert
    async create(data) {
        await productModel(data).save()
    }

    //select
    async select(id) {
        return await productModel.find()
    }

    //selectOne
    async selectOne(id) {
        return await productModel.findById(id) 
    }
    
}