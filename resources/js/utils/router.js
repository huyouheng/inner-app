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

import Content from './../Content';
import Login from './../components/Login';

import jwtToken from '../utils/jwt';
import Store from './../store/index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Content,
        children: [
            {
                path: '',
                component: Home,
                name: 'home',
                meta: {level: 1},
            },
            {
                path: 'users',
                component: User,
                children: [
                    {
                        path: '/',
                        name: 'users-index',
                        component: UserList,
                        meta: {level: 2}
                    },
                    {
                        path: 'bu-men',
                        name: 'users-buMen',
                        component: BuMen,
                        meta: {level: 2}
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
                path: 'equipments',
                component: Equipment,
                children: [
                    {
                        path: '/',
                        name: 'equipments-index',
                        component: BuMenList,
                        meta: {level: 2}
                    },
                    {
                        path: 'type',
                        name: 'equipments-type',
                        component: BuMenType,
                        meta: {level: 2}
                    },
                ]
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile,
                meta: {level: 1,requireAuthorized: true}
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {requestGuest: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to,from,next)=>{
    if (to.meta.requireAuthorized) {
        if (Store.state.user.authenticated || jwtToken.getToken()){
            return next();
        } else {
            return next({name: 'login'});
        }
    }

    if (to.meta.requestGuest) {
        if (Store.state.user.authenticated || jwtToken.getToken()){
            return next({name:'home'});
        } else {
            return next();
        }
    }

    return next();
});

export default router;

