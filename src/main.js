import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'

import App from './components/App'
import Home from './components/Home'
import ColourPanel from './components/ColourPanel'
import NumberPanel from './components/NumberPanel'
import dataColours from './data/colours'
import dataNumbers from './data/numbers'

require('./sass/app.scss')

const initialState = { colour: {colours: dataColours, active: 'green'},
                       number: {numbers: dataNumbers, active: 'two'}
                     }
const store = configureStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/home/:colour/:number/' component={Home}/>
        <Route path='/colours/:colour/:number/' component={ColourPanel}/>
        <Route path='/numbers/:colour/:number/' component={NumberPanel}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
