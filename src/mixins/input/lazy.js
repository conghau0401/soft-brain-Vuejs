import validator from './_validator.js'

export default {
  name: 'Lazy Input',
  props: ['value', 'validator', 'required', 'placeholder', 'errorMessage'],
  data: () => ({
    input: undefined,
    localValidator: () => true,
    error: false,
  }),
  created() {
    this.input = this.value
  },
  methods: {
    setValue(value) {
      this.input = value
    },
    updateValue() {
      const value = this.input
      const validate = validator({
        before: this.value,
        after: this.input,
        required: this.required,
        validator: this.validator,
        localValidator: this.localValidator,
      })

      if (validate > 0) {
        // SUCCESS
        this.error = false
        this.$emit('input', value)
        this.$emit('change', value, this.value)
      } else if (validate < 0) {
        // ERROR
        this.error = true
      } else {
        // EMPTY
        this.error = false
      }
    },
  },
}
