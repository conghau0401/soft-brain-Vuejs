<template>
  <div class="w-128 m-2">
    <div class="text-lg my-4">Checkbox</div>
    <div class="m-2">
      <div class="flex flex-col w-full p-2 border">
        <app-checkbox
          v-for="(item, idx) in options.checkbox.list"
          :key="idx"
          class="w-full flex justify-start my-1"
          v-model="options.checkbox.checked[idx]"
          :label="item.label"
        ></app-checkbox>
      </div>
    </div>
    <div class="m-2">
      <div class="flex flex-col w-full p-2 border">
        <div
          class="flex items-center my-1"
          v-for="(item, idx) in options.checkbox.list"
          :key="idx"
        >
          <app-checkbox v-model="options.checkbox.checked[idx]"></app-checkbox>
          <app-image class="mx-1" :url="item.url" size="sm"></app-image>
          <span> {{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppImage from '@atoms/image/index.vue'
import AppCheckbox from '@atoms/checkbox/index.vue'
export default {
  name: 'AppSample',
  components: {
    AppImage,
    AppCheckbox,
  },
  data: () => ({
    options: {
      checkbox: {
        list: [
          { label: '外出', url: '/assets/images/ic-calendar-bag.svg' },
          { label: '来客', url: '/assets/images/ic-calendar-bell.svg' },
          { label: '電話', url: '/assets/images/ic-calendar-person1.svg' },
          { label: '出張', url: '/assets/images/ic-calendar-phone.svg' },
          { label: '会議', url: '/assets/images/ic-calendar-recyclebin.svg' },
          { label: '内勤', url: '/assets/images/ic-calendar-user1.svg' },
        ],
        checked: [],
      },
    },
  }),
}
</script>
