import Vue from 'vue'
import VueRouter from 'vue-router'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import Daily from './components/Daily'
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'
import App from './App'

Raven
    .config('https://7aa56dee4d9f4c80940f667e8adc2619@sentry.io/110451')
    .addPlugin(RavenVue, Vue)
    .install()

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
