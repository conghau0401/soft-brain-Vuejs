import { randomStr } from '@utils'

function Id(prefix) {
  return {
    name: 'Id',
    data: () => ({
      id: '',
    }),
    created() {
      this.id = randomStr(prefix + '-')
    },
  }
}

export default Id
