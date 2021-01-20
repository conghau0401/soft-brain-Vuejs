import ja from './ja_jp.json'

const map = {
  ja_jp: { message: ja },
}

export default async function language(lang) {
  return map[lang]
}
