import api from '../api.js'

const clienteResource = {
    createProduto(params) {
        return new Promise( (resolve) => {
            api.post('/produto/cadastrar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProduto() {
        return new Promise( (resolve) => {
            api.get('/produto/listar/', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },

    listProdutoOne(idProduto) {
        return new Promise( (resolve) => {
            api.get(`/produto/listarOne/${idProduto}`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    createUsuario(params) {
        return new Promise( (resolve) => {
            api.post('/usuario/cadastrar/', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listarUsuario() {
        return new Promise( (resolve) => {
            api.get('/usuario/listar/', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listarUsuarioOne(idUsuario) {
        return new Promise( (resolve) => {
            api.get(`/usuario/listarOne/${idUsuario}`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    updateUsuario(idUsuario, params) {
        return new Promise( (resolve) => {
            api.put(`/usuario/alterar/${idUsuario}`, params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    deleteUsuario(idUsuario) {
        return new Promise( (resolve) => {
            api.put(`/usuario/excluir/${idUsuario}`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    
}

export default clienteResource