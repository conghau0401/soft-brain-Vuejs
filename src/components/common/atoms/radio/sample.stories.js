import AppRadio from '@atoms/radio/index.vue'

export default {
  title: 'Common/Atoms/Components/Radio/Sample',
}

export const Primary = () => ({
  components: {
    AppRadio,
  },
  data: () => ({
    options: ['手動', '自動追加'],
    selected: 1,
  }),
  template: `
  <div class="tailwind-wrapper m-2">
    <div class="m-4">
      <div class="m-2"> justify-around </div>
      <app-radio
        class="border p-2 justify-around"
        horizon
        :options="options"
        :selected="selected"
        @onSelect="(value) => (selected = value)"
      ></app-radio>
    </div>
    <div class="m-4">
      <div class="m-2"> justify-between </div>
      <app-radio
        class="border p-2 justify-between"
        horizon
        :options="options"
        :selected="selected"
        @onSelect="(value) => (selected = value)"
      ></app-radio>
    </div>
    <div class="m-4">
      <div class="m-2"> justify-start </div>
      <app-radio
        class="border p-2 justify-start"
        horizon
        :options="options"
        :selected="selected"
        @onSelect="(value) => (selected = value)"
      ></app-radio>
    </div>
    <div class="m-4">
      <div class="m-2"> justify-end </div>
      <app-radio
        class="border p-2 justify-end"
        horizon
        :options="options"
        :selected="selected"
        @onSelect="(value) => (selected = value)"
      ></app-radio>
    </div>
  </div>
  `,
})
Primary.storyName = 'Sample Usage'
