import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

App.mpType = 'app'

import $http from './http/httpadapter'
Vue.prototype.$http = $http

import uView from "uview-ui";
Vue.use(uView);

import cuCustom from 'uni-colorui/theme/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

const app = new Vue({
    ...App
})
app.$mount(); 
