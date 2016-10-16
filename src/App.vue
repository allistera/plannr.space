<template>
  <div>
    <div class="container content">

      <nav-bar></nav-bar>

      <router-view></router-view>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>plannr.space</strong> by <a href="https://allisterantosik.com" target="_blank">Allister Antosik</a>. Made with ♥ in Scotland.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './node_modules/bulma/bulma';

.nav {
  background: transparent;
}
</style>
