import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import store from "./vuex/index";
import Login from './components/Login.vue';
import DevRegister from './components/DevRegister.vue';
import EmpRegister from './components/EmpRegister.vue';

import 'vuetify/dist/vuetify.min.css';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(vuetify);


Vue.config.productionTip = false;

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {name: 'Login', path: '/login', component: Login},
        {name: 'DevRegister', path: '/devRegister', component: DevRegister},
        {name: 'EmpRegister', path: '/empRegister', component: EmpRegister}
    ]
});

new Vue({
    vuetify: new vuetify(),
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app');
