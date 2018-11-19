import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../view/home';
import User from '../view/users';
import Equipment from '../view/equipments';

import UserList from './../components/users/List';
import BuMen from './../components/users/BuMen';
import Profile from './../components/users/Profile';
import UserAdd from './../components/users/Create';

import BuMenList from './../components/equipments/List';
import BuMenType from './../components/equipments/Type';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {level:1}
    },
    {
        path: '/users',
        component: User,
        children: [
            {
                path: '/',
                name: 'users-index',
                component: UserList,
                meta: {level:2}
            },
            {
                path: 'bu-men',
                name: 'users-buMen',
                component: BuMen,
                meta: {level:2}
            },
            {
                path: 'create-user',
                name: 'users-create',
                component: UserAdd,
                meta: {level: 2}
            }
        ]
    },
    {
        path: '/equipments',
        component: Equipment,
        children: [
            {
                path: '/',
                name: 'equipments-index',
                component: BuMenList,
                meta: {level:2}
            },
            {
                path: 'type',
                name: 'equipments-type',
                component: BuMenType,
                meta: {level:2}
            },
        ]
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component: Profile,
        meta: {level:1}
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;

