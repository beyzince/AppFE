import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import store from "./vuex/index";
import Login from './components/Login.vue';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuetify);


Vue.config.productionTip = false;

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {name: 'Login', path: '/login', component: Login},
  ]
});

new Vue({
  vuetify : new Vuetify(),
  store: store,
  router: router,
  render: h => h(App),

}).$mount('#app')
