import Vue from 'vue'
import UploadButton from 'src/components/UploadButton'

describe('UploadButton.vue', () => {
  it('should render upload button', () => {
    const Ctor = Vue.extend(UploadButton)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('.button').textContent).to.contain('Upload')
  })
})
