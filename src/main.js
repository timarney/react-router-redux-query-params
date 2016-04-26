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

const initialState = { items: { num: 0 },
                       colour: {colours: dataColours, active: 'green'},
                       number: {numbers: dataNumbers, active: 'two'}
                     }
const store = configureStore(initialState)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='home' component={Home} />
        <Route path='numbers/:color/:number/' component={NumberPanel}/>
        <Route path='colours/:color/:number/' component={ColourPanel}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#app')
)
