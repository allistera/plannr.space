import Vue from 'vue'
import VueRouter from 'vue-router'
import Daily from './components/Daily'
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'
import App from './App'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/daily', component: Daily },
    { path: '/weekly', component: Weekly },
    { path: '/monthly', component: Monthly },
    { path: '/*', redirect: '/daily' }
  ]
})

/* eslint-disable no-new */
new Vue({
  extends: App,
  router
}).$mount('#app')
