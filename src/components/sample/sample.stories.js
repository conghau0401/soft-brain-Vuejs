import AppSample from './sample.vue'

export default {
  title: 'Example/Sample',
  component: AppSample,
}

export const Primary = () => ({
  components: {
    AppSample,
  },
  template: `
  <div class="bg-white p-8 overflow-scroll">
    <app-sample></app-sample>
  </div>
  `,
})
