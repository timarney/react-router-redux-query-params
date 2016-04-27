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
    let { params, query, colour, number } = this.props

    const queryVals = queryHelper(query)

    return (
      <div>
        <header>
          <Link to={urlHelper(params)} activeClassName='active'>Home</Link>
          <Link to={urlHelper(params, 'number')} activeClassName='active'>Numbers</Link>
          <Link to={urlHelper(params, 'colour')} activeClassName='active'>Colours</Link>
          <p className='selected'>
          Selected = <span className='colour-name'>{colour}</span> <span className='number-name'>{number}</span>
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

const { element, object, string } = React.PropTypes

App.propTypes = {
  children: element,
  location: object,
  params: object,
  query: object,
  colour: string,
  number: string
}

function mapStateToProps (state, ownProps) {
  return {
    params: ownProps.params,
    query: ownProps.location.query,
    colour: ownProps.params.colour,
    number: ownProps.params.number
  }
}

export default connect(mapStateToProps, null)(App)
