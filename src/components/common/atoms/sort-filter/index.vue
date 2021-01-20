<template>
  <div>
    <div class="sort-table">
      <div class="item-sort" v-if="sort">
        <label
          class="sort-icon"
          :class="{ active: sortId === sortAsc }"
          @click="onClickSort(sortId, sortAsc)"
        >
          <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
        </label>
        <p>昇順</p>
      </div>
      <div class="item-sort" v-if="sort">
        <label
          class="sort-icon"
          :class="{ active: sortId === sortDesc }"
          @click="onClickSort(sortId, sortDesc)"
        >
          <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </label>
        <p>降順</p>
      </div>
      <div class="item-sort" v-if="lock">
        <label
          class="sort-icon"
          :class="{ active: lockId > 0 }"
          @click="onClickLock(lockId, 1)"
        >
          <i class="fa fa-lock" aria-hidden="true"></i>
        </label>
        <p>列の固定</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sort: {
      type: Boolean,
      default: false,
    },
    lock: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    sortAsc: 1,
    sortDesc: 2,
    sortId: 0,
    lockId: 0,
  }),
  methods: {
    onClickSort(key, value) {
      if (key == value) {
        this.sortId = 0
      } else {
        this.sortId = value
      }
      this.$emit('onClick', {
        sortId: this.sortId,
        lockId: this.lockId,
      })
    },
    onClickLock(key, value) {
      if (key == value) {
        this.lockId = 0
      } else {
        this.lockId = value
      }
      this.$emit('onClick', {
        sortId: this.sortId,
        lockId: this.lockId,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.sort-table {
  @apply p-4;
  @apply border-b;
  @apply border-gray-e;
  .item-sort {
    @apply text-sm;
    @apply flex;
    @apply items-center;
    @apply mb-1;
    label.sort-icon {
      width: 24px;
      height: 24px;
      @apply text-center;
      @apply rounded-xs;
      @apply flex;
      @apply items-center;
      @apply justify-center;
      @apply hover:bg-gray-e;
      @apply mr-2;
      @apply cursor-pointer;
      &.active {
        @apply bg-gray-e;
        i {
          @apply text-primary;
        }
      }
      &:hover {
        i {
          @apply text-primary;
        }
      }
      i {
        @apply text-gray-9;
      }
    }
  }
}
</style>
