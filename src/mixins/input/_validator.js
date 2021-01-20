function _changed(after, before) {
  if (after !== before) {
    return true
  }
}

const NO_CHANGE = 0
const ERROR = -1
const EMPTY = -2
const SUCCESS = 1

export default function ({ before, after, required, validator, localValidator }) {
  if (!_changed(after, before)) {
    return NO_CHANGE
  }

  if (!after) {
    if (required) {
      return EMPTY
    }
    return SUCCESS
  }

  if (localValidator) {
    if (!localValidator(after)) {
      return ERROR
    }
  }

  if (validator) {
    if (!validator(after)) {
      return ERROR
    }
  }
  return SUCCESS
}
