require('./bootstrap');

window.Vue = require('vue');

Vue.config.devtools = true;

import vmodal from 'vue-js-modal';
Vue.use(vmodal);

import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

import jwtToken from './utils/jwt';

axios.interceptors.request.use(function (config) {
    if (jwtToken.getToken()){
    	config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken();
	}
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

import store from './store/index';

import router from './utils/router';

import App from './App';

Vue.component('app', App);

const app = new Vue({
    el: '#app',
    store,
    router,
});
