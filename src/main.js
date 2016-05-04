import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { App, Home, MainPanel, ProfilePanel, ColourPanel, BuildingPanel } from './components'
import initialState from './data'

require('./sass/app.scss')

const store = configureStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/:profile/:colour/:building' component={Home}/>

        <Route path='panel' component={MainPanel}>
          <Route path='profile/:profile/:colour/:building' component={ProfilePanel}/>
          <Route path='colours/:profile/:colour/:building' component={ColourPanel}/>
          <Route path='building/:profile/:colour/:building' component={BuildingPanel}/>

        </Route>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
