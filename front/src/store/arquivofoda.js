import clienteResource from '../api/resources/usuario.js'

const state = {
    usuario: {}
}

const getters = {
    getUsuario: (state) => {
        return state.usuario
    }
}

const actions = {
    createUsuario({ dispatch }, payload) {
        clienteResource.createUsuario(payload).then( () => {
            dispatch('')
        })
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}