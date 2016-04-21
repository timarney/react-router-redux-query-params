import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'

import App from './components/App'
import Home from './components/Home'
import Foo from './components/Foo'
import Bar from './components/Bar'

const initialState = { items: { num: 0 } }
const store = configureStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/foo' component={Foo}/>
        <Route path='/bar' component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
