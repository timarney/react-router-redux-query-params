import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'

export default function configureStore (initialState) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
