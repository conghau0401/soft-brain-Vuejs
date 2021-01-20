<template>
  <div v-input-label="labelInformation">
    <div :class="horizon ? 'horizon ' : 'vertical'">
      <div v-for="(item, idx) in options" :key="idx" class="m-1">
        <input
          type="radio"
          class="hidden"
          :id="id + idx"
          :name="item"
          :value="idx"
          v-model="input"
        />
        <label :for="id + idx">
          <div class="outside-circle">
            <div :class="idx === input ? 'marked' : 'hidden'"></div>
          </div>
          <span class="ml-2" v-if="item">{{ item }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Id from '../../../../mixins/id'
import Label from '../../../../mixins/label'

export default {
  name: 'AppRadio',
  mixins: [Id('radio'), Label],
  props: {
    horizon: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    input: {
      get() {
        return this.selected
      },
      set(value) {
        if (value !== this.selected) {
          this.$emit('onSelect', value, this.options[value])
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
label {
  @apply flex;
  @apply items-center;
  @apply justify-start;
}

.horizon {
  @apply flex;
  @apply items-center;
}
.vertical {
  @apply flex;
  @apply flex-col;
}

.outside-circle {
  @apply bg-white;
  @apply border-2;
  @apply border-gray-c;
  @apply rounded-full;
  @apply p-0.5;
  @apply w-4;
  @apply h-4;
}

.marked {
  @apply h-full;
  @apply w-full;
  @apply rounded-full;
  @apply bg-primary;
}
</style>
