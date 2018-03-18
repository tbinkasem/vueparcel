import Vue from "./node_modules/vue/dist/vue.esm.browser.js";
window.Vue = Vue;

import collect from "collect.js";
Vue.prototype.$collect = collect;

import Vuex from "vuex";
window.Vuex = Vuex;
Vue.use(Vuex);

import axios from "axios";
window.axios = axios;
Vue.prototype.$http = axios;

import VueMultianalytics from "vue-multianalytics";
let gaConfig = {
    appName: "Test", // Mandatory
    appVersion: "0.1", // Mandatory
    trackingId: "YOUR_UA", // Mandatory
    debug: true // Whether or not display console logs debugs (optional)
};
let mixpanelConfig = {
    token: "YOUR_TOKEN"
};
Vue.use(VueMultianalytics, {
    modules: {
        ga: gaConfig,
        mixpanel: mixpanelConfig
    }
});

import VueRouter from "vue-router";
window.VueRouter = VueRouter;
Vue.use(VueRouter);

import ("tachyons");

import { sync } from "vuex-router-sync";
Vue._sync = sync;

import Storage from "vue-ls";

let options = {
    namespace: "vuejs__", // key prefix
    name: "ls", // name variable Vue.[ls] or this.[$ls],
    storage: "local" // storage name session, local, memory
};

Vue.use(Storage, options);