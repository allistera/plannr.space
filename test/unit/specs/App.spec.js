import Vue from 'vue'
import App from 'src/App'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><app></app></div>',
      components: { App }
    }).$mount()
    expect(vm.$el.querySelector('.footer a').textContent).to.contain('Allister Antosik')
  })

  it('should render navbar', () => {
    // Todo
  })
})
