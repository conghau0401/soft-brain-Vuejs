<template>
  <div class="flex flex-col w-256 m-2">
    <app-address
      :attributes="address"
      @onUpdate="(obj) => (address = obj)"
    ></app-address>
    <div class="flex flex-col mt-4">
      <span> 郵便番号: {{ address.zipCode }} </span>
      <span> 住所: {{ address.address }} </span>
      <span> 建物名: {{ address.building }} </span>
    </div>
  </div>
</template>

<script>
import AppAddress from '@molecules/input/address'
export default {
  name: 'AppAddressSample',
  components: {
    AppAddress,
  },
  data: () => ({
    address: {
      zipCode: '103-0027',
      address: '東京都中央区日本橋1-13-1',
      building: '日鉄日本橋ビル 9階',
    },
  }),
}
</script>
