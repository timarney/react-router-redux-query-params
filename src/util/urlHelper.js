function urlHelper (params = {}, type, val = '') {
  let { colour, number } = params

  let path = '/home'

  switch (type) {
    case 'colour':
      colour = val !== '' ? val : colour
      path = '/colours'
      break
    case 'number':
      number = val !== '' ? val : number
      path = '/numbers'
      break
  }

  const url = `${path}/${colour}/${number}/`

  return url
}

export default urlHelper
