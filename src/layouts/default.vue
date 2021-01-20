<template>
  <div class="default-wrapper">
    <global-menu class="global-menu"></global-menu>
    <div class="flex flex-col w-full h-full overflow-hidden">
      <local-toolbar></local-toolbar>
      <div class="flex flex-grow overflow-hidden">
        <local-menu></local-menu>
        <div id="main-content" class="w-full p-1 overflow-scroll">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <global-tool></global-tool>
  </div>
</template>

<script>
import GlobalMenu from '@components/layouts/global-menu'
import LocalToolbar from '@components/layouts/local-toolbar'
import LocalMenu from '@components/layouts/local-menu'
import GlobalTool from '@components/layouts/global-tool'
export default {
  name: 'DefaultLayout',
  components: {
    GlobalMenu,
    LocalMenu,
    LocalToolbar,
    GlobalTool,
  },
}
</script>

<style lang="scss" scoped>
.default-wrapper {
  @apply flex;
  @apply h-screen;
  @apply w-screen;
  @apply bg-white;
  @apply overflow-hidden;
}
</style>
