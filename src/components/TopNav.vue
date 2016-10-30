<template>
  <section class="hero is-info is-medium">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item is-brand" href="#">
          <h1>plannr.space</h1>
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item" href="#">
          <router-link to="/daily" class="nav-item" active-class="is-active">Daily</router-link>
        </a>
        <a class="nav-item" href="#">
          <router-link to="/weekly" class="nav-item" active-class="is-active">Weekly</router-link>
        </a>
        <a class="nav-item" href="#">
          <router-link to="/monthly" class="nav-item" active-class="is-active">Monthly</router-link>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

    </nav>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
