<template>
  <div>
    <div v-for="(item, idx) in tree" :key="idx">
      <app-checkbox-group-item
        v-model="item.selected"
        :label="item.label"
        :img="item.img"
        :indeterminate="fnNeedToBeNamed(item)"
        @change="(after) => onChange(after, item)"
      ></app-checkbox-group-item>
      <div v-if="item.subs" class="ml-4">
        <app-checkbox-group
          :tree="item.subs"
          :level="level + 1"
        ></app-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import AppCheckboxGroupItem from './item.vue'

export default {
  name: 'AppCheckboxGroup',
  components: {
    AppCheckboxGroupItem,
  },
  props: {
    level: {
      type: Number,
      default: 0,
    },
    tree: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    // TODO: name this function
    fnNeedToBeNamed(item) {
      if (!item.subs || item.subs.length === 0) {
        return false
      }

      const len = item.subs.length
      if (len === 0) {
        return false
      }

      let count = item.subs.filter((el) => el.selected).length
      if (count > 0 && count < len) {
        item.selected = false
        return true
      }

      if (count === len) {
        item.selected = true
      }

      if (count === 0) {
        item.selected = false
      }

      return item.subs.find((el) => this.fnNeedToBeNamed(el))
    },
    onChange(value, item) {
      if (item.subs) {
        item.subs.forEach((el) => {
          el.selected = value
          this.onChange(value, el)
        })
      }
    },
  },
}
</script>
