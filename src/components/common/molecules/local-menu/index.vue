<template>
  <ul>
    <li v-for="(item, idx) in localTree" :key="idx" class="m-2">
      <div class="app-flex-start item">
        <template v-if="hasSubs(item)">
          <div @click="onClick(item)">
            <div v-html="icon.open" v-if="item.open"></div>
            <div v-html="icon.close" v-else></div>
          </div>
        </template>

        <div>{{ item.label }}</div>
      </div>
      <div class="ml-4" v-if="hasSubs(item) && item.open">
        <app-local-menu
          :tree="item.subs"
          :icon="icon"
          @onMenuChange="(val) => (item.subs = val)"
        ></app-local-menu>
      </div>
    </li>
  </ul>
</template>

<script>
import cloneDeep from 'lodash.clonedeep'
export default {
  name: 'AppLocalMenu',
  components: {},
  props: {
    tree: {
      type: Array,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    localTree: [],
  }),
  watch: {
    tree(val) {
      this.localTree = cloneDeep(val)
    },
  },
  created() {
    function clean(localTree) {
      localTree.map((el) => {
        el.open = el.open || false
        if (el.subs) {
          if (el.subs.length === 0) {
            delete el.subs
          } else {
            clean(el.subs)
          }
        }
      })
    }
    this.localTree = clean(cloneDeep(this.tree))
  },
  computed: {},
  methods: {
    hasSubs(item) {
      return item.subs && item.subs.length > 0
    },
    onClick(item) {
      item.open = !item.open
      this.$emit('onMenuChange', this.localTree)
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
}
</style>
