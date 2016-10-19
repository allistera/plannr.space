import Vue from 'vue'
import NavBar from 'src/components/NavBar'

describe('NavBar.vue', () => {
  it('should render NavBar', () => {
    const Ctor = Vue.extend(NavBar)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('.is-brand').textContent).to.contain('plannr.space')
  })
})
