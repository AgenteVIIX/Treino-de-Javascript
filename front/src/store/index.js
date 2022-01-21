import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import arquivofoda from './arquivofoda.js'

const store = createStore({
    modules: {
        arquivofoda
    },
    
    plugins: [createPersistedState()]
})

export default store 