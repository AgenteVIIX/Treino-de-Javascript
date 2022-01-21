const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const UserRoutes = require('./routes/User-Routes.js')
const ProductRoutes = require('./routes/Product-Routes.js')
const StockRoutes = require('./routes/Stock-Routes.js')

mongoose.connect('mongodb+srv://admin:admin@cluster.wmeyw.mongodb.net/bancoFoda?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//8paHwKRP5Wyjg4Kw
//mongoose.set('useFindAndModify', false)
app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    app.use(cors())
    next()
})

app.use(bodyParser.json())
app.use('/usuario', UserRoutes)
app.use('/produto', ProductRoutes)
app.use('/estoque', StockRoutes)

app.listen(3000, () => {
    console.log('APP listening at http://localhost:3000')
})