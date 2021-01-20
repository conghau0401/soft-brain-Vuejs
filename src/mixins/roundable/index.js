const map = {
  left: 'rounded-l',
  right: 'rounded-r',
  top: 'rounded-t',
  bottom: 'rounded-b',
}

const Roundable = {
  name: 'Roundable',
  props: {
    rounded: {
      type: [Boolean, String],
      default: true,
    },
  },
  computed: {
    roundedClass() {
      if (this.rounded) {
        if (typeof this.rounded === 'boolean') {
          return 'rounded'
        }
        return map[this.rounded]
      }
      return ''
    },
  },
}

export default Roundable
