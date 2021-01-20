import AppSample from './sample.vue'

export default {
  title: 'Components/Molecules/Input/Address/Sample',
}

const Template = () => ({
  components: {
    AppSample,
  },
  template: `
  <div class="bg-white p-8 overflow-scroll">
    <app-sample></app-sample>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.storyName = 'Sample Usage'
