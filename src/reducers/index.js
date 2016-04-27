
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

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

const rootReducer = combineReducers({ colour, number, routing: routerReducer })

export default rootReducer
