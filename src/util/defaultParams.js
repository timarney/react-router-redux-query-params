import curry from 'lodash.curry'
import initialState from '../data/'

export function appParams (state, params) {
  // console.log('=================')
  // console.log(state)
  // console.log('=================')
  Object.keys(state).map((key, index) => {
    if (typeof (params) === 'object' && !params.hasOwnProperty(key)) {
      params[key] = state[key].default
    }
  })

  return params
}

const defaultParams = curry(appParams)(initialState)

export default defaultParams
