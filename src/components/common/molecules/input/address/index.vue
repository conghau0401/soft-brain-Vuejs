<template>
  <div>
    <app-input-label
      :label="$t('message.misc.input.address.label')"
    ></app-input-label>
    <div class="gray-c-border">
      <div class="flex flex-wrap justify-between">
        <app-input-item
          class="item"
          v-model="zipCode"
          type="TEXT_TYPE_ZIP_CODE"
          :label="$t('message.misc.input.address.zip_code')"
        ></app-input-item>
        <app-input-item
          class="item"
          v-model="address"
          :label="$t('message.misc.input.address.address')"
        ></app-input-item>
        <app-input-item
          class="item w-full"
          v-model="building"
          :label="$t('message.misc.input.address.building')"
        ></app-input-item>
      </div>
    </div>
  </div>
</template>

<script>
import AppInputLabel from '@atoms/input-label/index.vue'
import AppInputItem from '@molecules/input/input-item'

export default {
  name: 'AppAddress',
  components: {
    AppInputItem,
    AppInputLabel,
  },
  props: {
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    zipCode: '',
    address: '',
    building: '',
  }),
  created() {
    this.zipCode = this.attributes.zipCode
    this.address = this.attributes.address
    this.building = this.attributes.building
  },
  watch: {
    zipCode(value, old) {
      if (value !== old) {
        this.$emit('onUpdate', {
          zipCode: value,
          address: this.address,
          building: this.building,
        })
      }
    },
    address(value, old) {
      if (value !== old) {
        this.$emit('onUpdate', {
          zipCode: this.zipCode,
          address: value,
          building: this.building,
        })
      }
    },
    building(value, old) {
      if (value !== old) {
        this.$emit('onUpdate', {
          zipCode: this.zipCode,
          address: this.address,
          building: value,
        })
      }
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  min-width: 48%;
}
</style>
