import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../view/home'
import User from '../view/users'
import Equipment from '../view/equipments'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/users',
        component: User
    },
    {
        path: '/equipments',
        component: Equipment
    }
];

const router = new VueRouter({
    routes
});

export default router;

