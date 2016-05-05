function objHelper () {
  let self = {}

  self.getProp = (obj, prop) => {
    obj = typeof (obj) === 'object' ? obj : {}
    const val = obj.hasOwnProperty(prop) ? obj[prop] : ''
    return val
  }

  self.getObj = (data, selected, prop) => {
    const match = data.filter((item) => {
      return item[prop] === selected
    })

    return match[0]
  }

  return self
}

const dataHelper = objHelper()

export default dataHelper
