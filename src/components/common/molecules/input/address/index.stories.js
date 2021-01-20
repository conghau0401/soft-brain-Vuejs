import AppAddress from '@molecules/input/address'

export default {
  title: 'Components/Molecules/Input/Address',
  component: AppAddress,
}

const Template = (args, { argTypes }) => ({
  components: {
    AppAddress,
  },
  props: Object.keys(argTypes),
  template: `<div class="tailwind-wrapper">
    <app-address
      v-bind="$props"
      @onUpdate="onUpdate"
    ></app-address>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  attributes: {
    zipCode: '103-0027',
    address: '東京都中央区日本橋1-13-1',
    building: '日鉄日本橋ビル 9階',
  },
}
