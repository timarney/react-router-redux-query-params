
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function items (state = { num: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { num: state.num + 1, action: 'increment' })
    default:
      return state
  }
}

const rootReducer = combineReducers ({ items, routing: routerReducer })

export default rootReducer
