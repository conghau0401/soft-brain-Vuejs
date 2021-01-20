export function getDeepKeys(obj, splitter = '-') {
  function _join (subKey) {
    return this.prefix + subKey
  }
  const keys = []
  for(let key in obj) {
    if(typeof obj[key] === "object") {
      getDeepKeys(obj[key])
        .map(_join.bind({ prefix: key + splitter }))
        .forEach(el => keys.push(el))
    } else {
      keys.push(key)
    }
  }
  return keys
}

export function randomStr(prefix = '') {
  return prefix + btoa(Math.random()).substr(3, 9)
}

export function _to2digit(val) {
  return val < 10 ? '0' + val : val.toString()
}
