<template>
  <div class="global-menu-footer-wrapper">
    <div class="app-flex-between guide">
      <div class="center" @click="guideClick">
        <img src="/assets/images/ic-new-user.svg" />
        <span v-if="open">初心者の方</span>
      </div>
      <div class="center" @click="feebackClick">
        <img src="/assets/images/ic-feedback.svg" />
        <span v-if="open">フィードバック</span>
      </div>
    </div>
    <app-toggle-button
      class="toggle"
      :side="side"
      @onToggle="onToggle"
    ></app-toggle-button>
  </div>
</template>

<script>
import AppToggleButton from '@molecules/toggle-button'
export default {
  name: 'GlobalMenuFooter',
  components: {
    AppToggleButton,
  },
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    side: 'left',
  }),
  computed: {},
  methods: {
    onToggle(val) {
      this.side = val
      this.$emit('onToggle')
    },
    feebackClick() {
      // TODO
    },
    guideClick() {
      // TODO
    },
  },
  created() {
    this.side = this.open ? 'left' : 'right'
  },
}
</script>

<style lang="css" scoped>
img {
  @apply h-4;
  @apply w-4;
  @apply mr-1;
}

.top-border {
  @apply border-t;
  @apply border-dark-blue;
}

.guide {
  @apply px-1;
  @apply py-4;
  @apply text-gray-c;
  @apply text-xs;
}

.toggle {
  @apply text-white;
  @apply top-border;
  @apply py-2;
  @apply my-1;
}

.global-menu-footer-wrapper {
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
}
</style>
