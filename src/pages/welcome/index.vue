<template>
  <div class="welcome">
    <img src="/logo.svg" />
    <span>
      {{ $t(message) }}
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      message: (state) => state.welcome.message,
    }),
  },
}
</script>

<style lang="css">
.welcome {
  @apply flex;
  @apply w-screen;
  @apply h-screen;
  @apply items-center;
  @apply justify-center;
  @apply bg-lighter-blue;
}

.welcome img {
  @apply w-8;
  @apply h-8;
}
</style>
