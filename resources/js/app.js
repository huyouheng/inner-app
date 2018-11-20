require('./bootstrap');

window.Vue = require('vue');

Vue.config.devtools = true;

import vmodal from 'vue-js-modal';
Vue.use(vmodal);

import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

import store from './utils/store';

import router from './utils/router';

import App from './App';

Vue.component('app', App);

const app = new Vue({
    el: '#app',
    store,
    router,
});
