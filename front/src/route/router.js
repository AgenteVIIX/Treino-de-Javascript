import { createRouter, createWebHistory } from 'vue-router'

const route = [
    {
        path: '/',
        component: () => import('../components/pagefoda.vue')
    },
    {
        path: '/pagefoda2',
        component: () => import('../components/pagefoda2.vue')
    },
    {
        path: '/createAccount',
        component: () => import('../components/createAccount.vue')
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: route 
})

export default router