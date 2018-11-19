require('./bootstrap');

window.Vue = require('vue');
import vmodal from 'vue-js-modal';
Vue.use(vmodal);

import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

import router from './router/index';

import App from './App';

Vue.component('app', App);

const app = new Vue({
    el: '#app',
    router
});
