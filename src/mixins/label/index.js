function _div ({ required, text }) {
  const div = document.createElement('div')
  div.className = 'mb-2 input-label'
  div.innerHTML = `<span>${text.label}</span>`
  if (required) {
    div.innerHTML += `<span class="input-required">${text.required}</span>`
  }
  return div
}

function _change(value, oldValue) {
  return value.key !== oldValue.key
}

export default {
  name: 'Label',
  directives: {
    'input-label': {
      inserted (el, binding) {
        if (!binding.value.hidden) {
          el.prepend(_div(binding.value))
        }
      },
      update (el, binding) {
        if (!_change(binding.value, binding.oldValue)) {
          return
        }

        const div = el.getElementsByClassName('input-label')[0]
        if (div) {
          el.removeChild(el.childNodes[0])
        }

        if (!binding.value.hidden) {
          el.prepend(_div(binding.value))
        }
      },
    },
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    labelInformation() {
      return {
        hidden: !this.label,
        required: this.required,
        key: this.label + '_' + this.required,
        text: {
          label: this.label,
          required: this.$t('message.misc.required'),
        },
      }
    },
  },
}
