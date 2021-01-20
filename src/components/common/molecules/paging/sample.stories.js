import AppSample from './sample.vue'

export default {
  title: 'Components/Molecules/Paging/Sample',
  component: AppSample,
}

const Template = () => ({
  components: {
    AppSample,
  },
  template: `
  <div class="bg-white p-8 overflow-scroll h-64">
    <app-sample></app-sample>
  </div>
  `,
})

export const Primary = Template.bind({})
Primary.storyName = 'Sample Usage'
