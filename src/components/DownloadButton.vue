<template>
  <span>
    <button class="button is-primary is-large" v-on:click="download" id="download">Download</button>
  </span>
</template>

<script>
export default {
  props: ['view', 'data-items'],
  methods: {
    download: function (event) {
      event.preventDefault()

      var data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.dataItems))
      var a = document.createElement('a')
      a.href = 'data:' + data
      var date = new Date().toLocaleDateString('en-GB')
      a.download = date + ' ' + this.view + ' Notes.json'
      a.innerHTML = 'download JSON'

      var container = document.getElementById('content')
      container.appendChild(a)
      a.click()

      a.remove()
    }
  }
}
</script>
