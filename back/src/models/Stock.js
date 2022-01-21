const mongoose = require('mongoose')
const Schema = mongoose.Schema


const EstoqueProduto = new Schema ({
    name: String,
    price: Number
})

const EstoqueUsuario = new Schema ({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Estoque = new Schema({
    usuario: EstoqueUsuario,
    produto:  EstoqueProduto
})

module.exports = mongoose.model('estoque', Estoque)