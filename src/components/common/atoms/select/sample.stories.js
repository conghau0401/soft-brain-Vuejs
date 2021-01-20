import AppSample from './sample.vue'

export default {
  title: 'Common/Atoms/Components/Select/Sample',
  component: AppSample,
}

export const Primary = () => ({
  components: {
    AppSample,
  },
  template: `
  <div class="bg-white p-8 overflow-scroll h-64">
    <app-sample></app-sample>
  </div>
  `,
})
Primary.storyName = 'Sample Usage'
