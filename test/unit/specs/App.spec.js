import Vue from 'vue'
import App from 'src/App'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Ctor = Vue.extend(App)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('.footer a').textContent).to.contain('Allister Antosik')
  })
})
