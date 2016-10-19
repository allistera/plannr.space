import Vue from 'vue'
import DownloadButton from 'src/components/DownloadButton'

describe('DownloadButton.vue', () => {
  it('should render upload button', () => {
    const Ctor = Vue.extend(DownloadButton)
    const vm = new Ctor({ view: 'daily' }).$mount()
    expect(vm.$el.querySelector('#download').textContent).to.contain('Download')
  })
})
