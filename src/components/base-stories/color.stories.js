import configs from '@tailwind.config.js'
const { theme: { colors }} = configs

export default {
  title: 'Base/Style/Color',
}

export const Gray = () => ({
  components: {},
  template: `
  <div class="bg-white p-8">
    ${Object.keys(colors.gray).map(val => (`
    <div class="
      ${val > '9' ? 'text-black' : 'text-white'}
      bg-gray-${val}
      rounded-lg
      border
      p-2
      w-128
      m-2
    ">
      Gray-${val}: bg-gray-${val}
    </div>`)).join('\n')}
  </div>
  `,
})

const unGrayColors = { ...colors }
delete unGrayColors.white
delete unGrayColors.black
delete unGrayColors.gray

export const Text = () => ({
  components: {},
  template: `
  <div class="bg-gray-9 p-8">
    ${Object.keys(unGrayColors).map(val =>(`
    <div class="
      text-${val}
      ${val.includes('lighter') ? 'bg-gray-c' : 'bg-white'}
      rounded-lg
      border
      p-2
      w-128
      m-2
    ">
      ${_toTitle(val)}: text-${val}
    </div>
  `)).join('\n')}
  </div>
  `,
})

export const Background = () => ({
  components: {},
  template: `
  <div class="bg-white p-8">
    ${Object.keys(unGrayColors).map(val =>(`
    <div class="
      bg-${val}
      ${val.includes('lighter') ? 'text-black' : 'text-white'}
      rounded-lg
      border
      p-2
      w-128
      m-2
    ">
      ${_toTitle(val)}: bg-${val}
    </div>
  `)).join('\n')}
  </div>
  `,
})
function _toTitle(str) {
  const _converter = str => ' ' + str.toUpperCase().substr(1)
  return str.charAt(0).toUpperCase()
    + str.slice(1).replace(/(-[a-z])/g, _converter)
}
