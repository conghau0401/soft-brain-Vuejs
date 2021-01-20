import validator from './_validator.js'

export default {
  name: 'Input',
  props: ['value', 'validator', 'required', 'placeholder'],
  data: () => ({
    localValidator: () => true,
    error: false,
    errorMessage: '',
  }),
  methods: {
    setValue(value) {
      this.input = value
    },
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(value) {
        const validate = validator({
          before: this.value,
          after: value,
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
  },
}
