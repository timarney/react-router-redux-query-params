import initialState from '../data'

function defaultParams (params = {}) {
  if (typeof (params) !== 'object') {
    params = {}
  }

  Object.keys(initialState).map((key, index) => {
    if (!params.hasOwnProperty(key)) {
      params[key] = initialState[key].active
    }
  })

  return params
}

export default defaultParams
