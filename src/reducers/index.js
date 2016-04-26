
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function items (state = { num: 0, numbers: [] }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { num: state.num + 1, action: 'increment' })
    default:
      return state
  }
}

function colour (state = { colours: [], active: false }, action) {
  switch (action.type) {
    default:
      return state
  }
}

function number (state = { numbers: [], active: false }, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({ items, colour, number, routing: routerReducer })

export default rootReducer
