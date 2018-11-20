import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authorized: false
    },
    getters: {
        getLoginStatus : state => {
            return state.authorized;
        }
    },
    actions: {

    },
    mutations: {
        changeLoginStatus: (state)=>{
            state.authorized = true;
        }
    }
})