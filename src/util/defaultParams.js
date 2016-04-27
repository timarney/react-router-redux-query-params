import initialState from '../data'

function defaultParams (params = {}) {
  if (typeof (params) !== 'object') {
    params = {}
  }

  if (!params.hasOwnProperty('colour')) {
    params.colour = initialState.colour.active
  }

  if (!params.hasOwnProperty('number')) {
    params.number = initialState.number.active
  }

  return params
}

export default defaultParams
