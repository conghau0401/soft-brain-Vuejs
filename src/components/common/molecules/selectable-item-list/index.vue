<template>
  <div>
    <ul>
      <li
        v-for="(item, idx) in list"
        :key="idx"
        :class="{
          [classes.item || 'qltzp5-selectable-item']: true,
          [classes.selected || 'qltzp5-selected']: idx === sId,
        }"
        @click="onSelect(idx)"
      >
        <div class="app-flex-between">
          <div class="left app-flex-between">
            <app-image size="sm" :url="item.img" v-if="item.img" />
            <label class="ml-4"> {{ item.labels.left }} </label>
          </div>
          <label v-if="'right' in item.labels"> {{ item.labels.right }} </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AppImage from '@atoms/image/index.vue'
export default {
  name: 'AppSelectableItemList',
  components: {
    AppImage,
  },
  props: {
    classes: {
      type: Object,
      default: () => ({}),
    },
    selected: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sId: 4,
  }),
  methods: {
    onSelect(idx) {
      this.sId = idx
      this.$emit('onSelect', idx)
    },
  },
  watch: {
    selected(val) {
      this.sId = val
    },
  },
  created() {
    this.sId = this.selected
  },
}
</script>

<style lang="scss" scoped>
.qltzp5-selectable-item {
  @apply p-2;
  @apply hover:bg-gray-c;
}

.qltzp5-selected {
  @apply bg-gray-c;
}
</style>
