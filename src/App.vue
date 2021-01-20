<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      layout: (state) => state.layout,
    }),
  },
}
</script>

<style lang="css" scoped>
#app {
  @apply w-screen;
  @apply h-screen;
}
</style>
