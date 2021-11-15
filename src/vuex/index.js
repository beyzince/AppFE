import Vue from 'vue';
import Vuex from 'vuex';
import Login from "@/components/Login";
import EmpRegister from "@/components/EmpRegister";
import DevRegister from "@/components/DevRegister";

Vue.use(Vuex);

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {

};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        Login,
        EmpRegister,
        DevRegister
    }
});

export default store;