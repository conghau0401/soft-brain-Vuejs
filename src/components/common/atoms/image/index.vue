<template>
  <div :class="imgSize">
    <img class="w-full h-full" :src="url" :alt="alt" />
  </div>
</template>

<script>
// TODO: handle invalid url
export default {
  name: 'AppImage',
  props: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgSize() {
      return `img-${this.size || 'free'}`
    },
  },
}
</script>

<style lang="css" scoped>
.img-sm {
  @apply h-4;
  @apply w-4;
}
.img-md {
  @apply h-8;
  @apply w-8;
}
.img-lg {
  @apply h-16;
  @apply w-16;
}
</style>
