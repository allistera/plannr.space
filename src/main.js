import Vue from 'vue'
import VueRouter from 'vue-router'
import Daily from './components/Daily'
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'
import App from './App'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/daily': {
    component: Daily
  },
  '/weekly': {
    component: Weekly
  },
  '/monthly': {
    component: Monthly
  }
})

router.redirect({
  '*': '/daily'
})

router.start(App, '#app')
