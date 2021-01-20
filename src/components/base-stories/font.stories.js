import configs from '@tailwind.config.js'
const { theme: { fontSize }} = configs

export default {
  title: 'Base/Style/Font',
}

export const Primary = () => ({
  components: {},
  template: `
  <div class="bg-gray-c p-8">
    ${Object.keys(fontSize).map(val => (`
    <div class="text-black bg-white border p-2 w-128 m-4 text-${val}">
      ${val.toUpperCase()}: text-${val}
    </div>`)).join('\n')}
  </div>
  `,
})
