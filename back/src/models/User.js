const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = new Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

module.exports = mongoose.model('usuarios', Usuario)