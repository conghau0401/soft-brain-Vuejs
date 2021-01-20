import AppCheckbox from '@atoms/checkbox/index.vue'

export default {
  title: 'Components/Atoms/Checkbox/Sample',
}

const Template = () => ({
  components: {
    AppCheckbox,
  },
  data: () => ({
    checkboxOptions: [
      '外出',
      '来客',
      '電話',
      '出張',
      '会議',
      '内勤',
    ],
    checked: [],
  }),
  template: `
  <div class="bg-white p-8">
    <div class="w-64 m-2">
      <span>Checkbox</span>
      <div class="flex flex-col p-2 border">
        <app-checkbox
          class="w-full flex justify-start"
          v-for="(item, idx) in checkboxOptions"
          v-model="checked[idx]"
          :label="item"
          :key="idx"
        ></app-checkbox>
      </div>
    </div>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.storyName = 'Sample Usage'
