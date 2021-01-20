<template>
  <div :class="width" class="wrapper">
    <global-menu-header></global-menu-header>
    <global-menu-body></global-menu-body>
    <global-menu-footer :open="open" @onToggle="onToggle"></global-menu-footer>
  </div>
</template>

<script>
import GlobalMenuHeader from './header'
import GlobalMenuBody from './body'
import GlobalMenuFooter from './footer'
export default {
  name: 'GlobalMenu',
  components: {
    GlobalMenuHeader,
    GlobalMenuBody,
    GlobalMenuFooter,
  },
  props: {},
  data: () => ({
    open: false,
  }),
  computed: {
    width() {
      return this.open ? 'w-64' : 'w-16'
    },
  },
  methods: {
    onToggle() {
      this.open = !this.open
    },
  },
}
</script>

<style lange="scss" scoped>
.wrapper {
  @apply h-full;
  @apply bg-primary;
  @apply duration-500;
  @apply flex;
  @apply flex-col;
  @apply transition-all;
}
</style>
