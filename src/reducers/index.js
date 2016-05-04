
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function colour (state = { colours: [], active: false }, action) {
  switch (action.type) {
    default:
      return state
  }
}

function profile (state = { profiles: [], active: false }, action) {
  switch (action.type) {
    default:
      return state
  }
}

function building (state = { profiles: [], active: false }, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({ profile, colour, building, routing: routerReducer })

export default rootReducer
