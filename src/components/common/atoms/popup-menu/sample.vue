<template>
  <div>
    <div class="account-info">
      <div class="arrow-icon" @click="onToggle">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>
      <app-popup-menu
        v-if="showOption"
        v-model="value"
        :options="options"
        @status="updateOption"
        v-on-clickaway="onClickAwayHandler"
      >
      </app-popup-menu>
    </div>
    <div class="mt-4">
      <div>idx: {{ value }}</div>
      <div>content: {{ options[value] }}</div>
    </div>
  </div>
</template>

<script>
import AppPopupMenu from '@atoms/popup-menu/index.vue'
import ClickAway from '../../../../mixins/click-away'

export default {
  mixins: [ClickAway],
  components: {
    AppPopupMenu,
  },
  data: () => ({
    value: '',
    options: ['社員詳細', '設定', 'ログアウト'],
    showOption: false,
  }),
  methods: {
    updateOption(status) {
      this.showOption = status
    },
  },
}
</script>

<style lang="scss">
.account-info {
  @apply relative;
  @apply w-32;
  .wrapper-popup-menu {
    @apply absolute;
    @apply top-full;
    @apply left-0;
    @apply w-full;
  }
  .arrow-icon {
    @apply inline-block;
    @apply cursor-pointer;
  }
}
</style>
