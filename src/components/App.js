import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { urlHelper, queryHelper, defaultParams } from '../util'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { params, query } = this.props
    params = defaultParams(typeof (params) === 'object' ? params : {})
    const queryVals = queryHelper(query)

    return (
      <div className='app'>
        <header>
          <Link to={urlHelper(params)} activeClassName='active'>Home</Link>
          <Link to={urlHelper(params, 'number')} activeClassName='active'>Numbers</Link>
          <Link to={urlHelper(params, 'colour')} activeClassName='active'>Colours</Link>
          <p className='selected'>
          Selected = <span className='colour-name'>{params.colour}</span> <span className='number-name'>{params.number}</span>
          </p>
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
    params: typeof (ownProps.params) === 'object' ? ownProps.params : {},
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, null)(App)
