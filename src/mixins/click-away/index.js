import { directive as onClickaway } from 'vue-clickaway'

export default {
  directives: {
    onClickaway,
  },
  data: () => ({
    showOption: false,
  }),
  methods: {
    onToggle() {
      this.showOption = !this.showOption
    },
    onClickAwayHandler() {
      try {
        this.showOption = false
        this.$emit('onClickAway')
      } catch (err) {
        // TODO
      }
    },
  },
}
