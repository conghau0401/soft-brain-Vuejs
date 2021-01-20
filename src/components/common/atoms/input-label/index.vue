<template>
  <div v-input-label="labelInformation"></div>
</template>

<script>
import Label from '../../../../mixins/label'
export default {
  name: 'AppInputLabel',
  mixins: [Label],
}
</script>
