import cliente from "../utils/client.js"

const apiClient = {
    get(url, query) {
        return cliente.get(url, query)
    },
    post(url, parameters) {
        return cliente.post(url, parameters)
    },
    put(url, parameters) {
        return cliente.put(url, parameters)
    },
    patch(url, parameters) {
        return cliente.patch(url, parameters)
    },
    delete(url, parameters) {
        return cliente.delete(url, parameters)
    }
}

export default apiClient