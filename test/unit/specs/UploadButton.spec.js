import Vue from 'vue'
import UploadButton from 'src/components/UploadButton'

describe('UploadButton.vue', () => {
  it('should render upload button', () => {
    const Ctor = Vue.extend(UploadButton)
    const vm = new Ctor({ view: 'daily' }).$mount()
    expect(vm.$el.querySelector('#upload').textContent).to.contain('Upload')
  })
})
