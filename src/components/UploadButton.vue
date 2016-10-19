<template>
  <span>
    <input type="file" name="file" id="selectFiles" class="inputfile" v-on:change="files">
    <label for="selectFiles" class="button is-primary is-large" id="upload">Upload</label>
  </span>
</template>

<script>
/* global FileReader */

export default {
  props: ['view'],
  data: function () {
    return {
      files: ''
    }
  },
  methods: {
    files: {
      handler: function (file) {
        var view = this.view

        if (file.length > 0) {
          var files = document.getElementById('selectFiles').files

          if (files.length <= 0) {
            return false
          }

          var fr = new FileReader()

          fr.onload = function (e) {
            var result = JSON.parse(e.target.result)
            window.localStorage.setItem('plannr.space_' + view, JSON.stringify(result))
            window.location.reload()
          }

          fr.readAsText(files.item(0))
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
#selectFiles {
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
</style>
