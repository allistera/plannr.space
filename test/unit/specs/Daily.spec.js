import Vue from 'vue'
import Daily from 'src/components/Daily'

describe('Daily.vue', () => {
  it('should render daily view', () => {
    const Ctor = Vue.extend(Daily)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('#content h3').textContent).to.contain('Habit')
  })
})
