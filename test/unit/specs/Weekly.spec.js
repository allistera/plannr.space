import Vue from 'vue'
import Weekly from 'src/components/Weekly'

describe('Weekly.vue', () => {
  it('should render weekly view', () => {
    const Ctor = Vue.extend(Weekly)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('#content h2').textContent).to.contain('Review of Last Week')
  })

  it('should store data in localstorage', () => {
    // Todo
  })
})
