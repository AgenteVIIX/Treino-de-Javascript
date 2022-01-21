const ServiceStock = require('../services/Stock-Services.js')
const express = require('express')
const router = express.Router()
const services = new ServiceStock()

router.post('/cadastrar', async (req, res) => {
    console.log(req.body)
    await services.create({
        usuario: req.body.usuario._id,
        produto: [{_id: req.body.produto._id, nome: req.body.nome, price: req.body.price}]
    }).then(() => {
        res.status(201).json({
            message: "deu bom porra"
        })
    }).catch(() => {
        res.status(400).json ({
            messagte: "deu full ruim"
        })
    })
})


router.get('/listarOne/:id', async (req, res) => {
    let estoque = await services.selectOne(req.params.id)
    res.json(estoque)
})

router.get('/listar', async (req, res) => {
    let estoque = await services.select()
    res.json(estoque)
})

module.exports = router;

