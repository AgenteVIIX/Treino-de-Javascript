const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Produto = new Schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('produtos', Produto)