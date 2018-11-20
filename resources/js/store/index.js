import Vue from 'vue';
import Vuex from 'vuex';
import Action from './modules/action';

Vue.use(Vuex);
import user from './modules/user';

export default new Vuex.Store({
    modules: {
        user,
        Action
    },
    strict: true
})