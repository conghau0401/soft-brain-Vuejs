<template>
  <div class="select-wrapper" v-input-label="labelInformation">
    <div
      class="box-select"
      @click="onToggle"
      :class="{ 'border-primary text-primary': showOption }"
    >
      {{ selected }}
      <div class="arrow-down">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>
    </div>
    <div class="option-box" v-if="showOption">
      <div v-on-clickaway="onClickAwayHandler">
        <div>
          <div
            v-for="(item, idx) in options"
            :key="idx"
            class="option-item"
            :class="{ 'selected-item': values.includes(idx) }"
            @click="select(idx)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickAway from '../../../../mixins/click-away'
import Label from '../../../../mixins/label'

export default {
  name: 'AppMultiSelect',
  mixins: [Label, ClickAway],
  props: {
    values: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    separator: {
      type: String,
      default: ',',
    },
  },
  created() {
    this.list = this.values
  },
  computed: {
    selected() {
      return this.values.map((idx) => this.options[idx]).join(this.separator)
    },
    list() {
      return this.values
    },
  },
  methods: {
    select(idx) {
      const index = this.list.indexOf(idx)
      if (index > -1) {
        this.list.splice(index, 1)
      } else {
        this.list.push(idx)
        this.list.sort()
      }
      this.showOption = false
    },
  },
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  @apply relative;
  @apply inline-block;
  @apply w-full;
}
.box-select {
  @apply rounded-sm;
  @apply border;
  @apply py-0.5;
  @apply pr-4;
  @apply pl-2;
  @apply text-xs;
  @apply cursor-pointer;
  @apply hover:border-primary;
  @apply hover:bg-gray-e;
  @apply z-10;
  @apply relative;
}
.arrow-down {
  @apply absolute;
  @apply top-1/2;
  @apply transform -translate-y-1/2;
  @apply right-2;
  @apply text-sm;
}
.option-box {
  @apply absolute;
  @apply top-full;
  @apply bg-white;
  @apply rounded-sm;
  @apply w-full;
  @apply py-4;
  @apply shadow-xl;
  @apply z-10;
}
.option-item {
  @apply py-1;
  @apply px-4;
  @apply text-xs;
  @apply hover:text-primary;
  @apply hover:bg-lighter-blue;
  @apply cursor-pointer;
}

.selected-item {
  @apply text-primary;
  @apply bg-lighter-blue;
}
</style>
