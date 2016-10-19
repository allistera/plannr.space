<template>
  <nav class="nav">
    <div class="nav-left">
      <h1 class="nav-item is-brand">plannr.space</h1>
    </div>

    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu">
      <router-link to="/daily" class="nav-item" active-class="is-active">Daily</router-link>
      <router-link to="/weekly" class="nav-item" active-class="is-active">Weekly</router-link>
      <router-link to="/monthly" class="nav-item" active-class="is-active">Monthly</router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.is-active {
  font-weight: bold;
}
</style>
