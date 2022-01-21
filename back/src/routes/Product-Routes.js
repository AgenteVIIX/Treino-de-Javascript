const ServiceProduct = require('../services/Product-Services.js')
const express = require('express')
const router = express.Router()
const services = new ServiceProduct()

router.post('/cadastrar', async (req, res) => {
    console.log(req.body)
    await services.create({
        name: req.body.name,
        price: req.body.price,
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

router.get('/listar', async (req, res) => {
    let products = await services.select()
    res.json(products)
})

router.get('/listarOne/:id', async (req, res) => {
    let product = await services.selectOne(req.params.id)
    res.json(product)
})

module.exports = router;

