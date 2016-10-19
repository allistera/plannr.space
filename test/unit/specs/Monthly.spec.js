import Vue from 'vue'
import Monthly from 'src/components/Monthly'

describe('Monthly.vue', () => {
  it('should render monthly view', () => {
    const Ctor = Vue.extend(Monthly)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('#content h2').textContent).to.contain('Plan')
  })
})
