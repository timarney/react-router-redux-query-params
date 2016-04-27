import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { urlHelper } from '../util/urlHelper'
import queryHelper from '../util/queryHelper'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { params, query } = this.props

    const queryVals = queryHelper(query)

    return (
      <div>
        <header>
          <p>Links:</p>
          <Link to={urlHelper(params)}>Home</Link>
          {' | '}
          <Link to={urlHelper(params, 'number')}>Numbers</Link>
          {' | '}
          <Link to={urlHelper(params, 'colour')}>Colours</Link>
        </header>
        <div>
          <hr />
        </div>
        <div className='container'>
          <ReactCSSTransitionGroup
            component='div'
            transitionName='panel'
            transitionEnter={queryVals.anim}
            transitionLeave={queryVals.anim}
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
  location: object,
  params: object,
  query: object
}

function mapStateToProps (state, ownProps) {
  return {
    params: ownProps.params,
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, null)(App)
