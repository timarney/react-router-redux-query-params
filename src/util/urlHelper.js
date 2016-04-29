function hasVal (val, defaultVal) {
  return val !== '' ? val : defaultVal
}

function urlHelper (params = {}, type, val = '') {
  let { colour, number } = params

  let path = ''

  switch (type) {
    case 'colour':
      colour = hasVal(val, params[type])
      path = '/panel/colours'
      break
    case 'number':
      number = hasVal(val, params[type])
      path = '/panel/numbers'
      break
  }

  const url = `${path}/${colour}/${number}/`

  return url
}

export default urlHelper
