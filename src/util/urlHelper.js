function hasVal (val, defaultVal) {
  return val !== '' ? val : defaultVal
}

function urlHelper (params = {}, type, val = '') {
  let { profile, colour, building } = params

  let path = ''

  switch (type) {
    case 'profile':
      profile = hasVal(val, params[type])
      path = '/panel/profile'
      break
    case 'colour':
      colour = hasVal(val, params[type])
      path = '/panel/colours'
      break
    case 'building':
      building = hasVal(val, params[type])
      path = '/panel/building'
      break
  }

  const url = `${path}/${profile}/${colour}/${building}/`

  return url
}

export default urlHelper
