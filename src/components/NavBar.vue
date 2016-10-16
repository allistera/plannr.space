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
      <a v-link="{ path: '/daily', activeClass: 'is-active' }" class="nav-item">Daily</a>
      <a v-link="{ path: '/weekly', activeClass: 'is-active' }" class="nav-item">Weekly</a>
      <a v-link="{ path: '/monthly', activeClass: 'is-active' }" class="nav-item">Monthly</a>
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
