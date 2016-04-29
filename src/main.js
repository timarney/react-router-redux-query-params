import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { App, Home, HomePanel, MainPanel, ColourPanel, NumberPanel } from './components'
import initialState from './data'

require('./sass/app.scss')

const store = configureStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/:colour/:number/' component={Home}/>

        <Route path='panel' component={MainPanel}>
          <Route path='colours/:colour/:number/' component={ColourPanel}/>
          <Route path='numbers/:colour/:number/' component={NumberPanel}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
