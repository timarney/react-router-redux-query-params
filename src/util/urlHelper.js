function urlHelper (params = {}, type, val = '') {
  let url = ''

  let colour = 'red'
  let number = 'two'
  let path = '/home'

  if (params.hasOwnProperty('colour')) {
    colour = params.colour
  }

  if (params.hasOwnProperty('number')) {
    number = params.number
  }

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

  url = `${path}/${colour}/${number}/`

  return url
}

exports.urlHelper = urlHelper
