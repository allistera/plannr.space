<template>
  <div>
    <top-nav></top-nav>
    <timeline></timeline>

    <div>
      <div class="container content main">
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
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import NavBar from './components/NavBar'
import Timeline from './components/Timeline'
export default {
  components: {
    TopNav,
    NavBar,
    Timeline
  }
}
</script>

<style lang="scss">
@import './node_modules/bulma/bulma';

.main {
  margin-top: 40px;
}
</style>
