import axios from "axios"

const cliente = axios.create({
    baseURL: 'http://localhost:3000/',
    header: {
        'content-type': 'application/json'
    }
})

export default cliente