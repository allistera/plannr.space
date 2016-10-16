import Vue from 'vue'
import DownloadButton from 'src/components/DownloadButton'

describe('DownloadButton.vue', () => {
  it('should render download button', () => {
    const Ctor = Vue.extend(DownloadButton)
    const vm = new Ctor().$mount()
    expect(vm.$el.querySelector('button').textContent).to.contain('Download')
  })

  it('should download correct items', () => {
    // Todo
  })
})
