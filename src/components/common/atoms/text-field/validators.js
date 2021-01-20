/* eslint-disable no-useless-escape */
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i
const postCodeRegex = /^\d{3}-\d{4}$/i

const VALIDATORS = {
  TEXT_TYPE_EMAIL: (value) => emailRegex.test(value),
  TEXT_TYPE_PHONE: (value) => phoneRegex.test(value),
  TEXT_TYPE_ZIP_CODE: (value) => postCodeRegex.test(value),
}
export default VALIDATORS
