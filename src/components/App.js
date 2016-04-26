import React, { Component } from 'react'
import { hashHistory, Link } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <header>
          <p>Links:</p>
          {' '}
          <Link to={{ pathname: '/home/', query: { somevar: 'nice-this-works' } }} >Test Get Query Param</Link>
          {' | '}
          <Link to='/numbers/1/2/'>Numbers</Link>
          {' | '}
          <Link to='/colours/1/2/'>Colours</Link>
        </header>
        <div>
          <p><button onClick={() => hashHistory.push('numbers/1/2/')}>Go to /Numbers</button></p>
          <hr />
        </div>
        <div className='container'>
          <ReactCSSTransitionGroup
            component='div'
            transitionName='panel'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          </ReactCSSTransitionGroup>
          </div>
      </div>
   )
  }
}

const { element, object } = React.PropTypes

App.propTypes = {
  children: element,
  location: object
}
