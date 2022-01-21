const ServiceUser = require('../services/User-Services.js')
const express = require('express')
const router = express.Router()
const services = new ServiceUser()

router.post('/cadastrar', async (req, res) => {
    console.log(req.body)
    await services.create({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
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
    let user = await services.select()
    res.json(user)
})


router.put('/alterar/:id', async (req, res) => {
    await services.update(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        password: req.body.password,
        address: req.body.address
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

router.delete('/excluir/:id', async (req, res) => {
    await services.remove(req.params.id)
})

router.get('/listarOne/:id', async (req, res) => {
    let user = await services.selectOne(req.params.id)
    res.json(user)
})

module.exports = router;

