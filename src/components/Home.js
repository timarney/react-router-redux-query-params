import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/index'

export class Home extends Component {
  constructor (props) {
    super(props)
    this.increment = this.increment.bind(this)
  }

  increment (e) {
    e.preventDefault()
    const id = e.target.dataset.id
    this.props.dispatch(increment(id))
  }

  render () {
    let query = this.props.query.test ? this.props.query.test : ''

    return (
      <div>
        <h1>HOME</h1>
        <p>{query}</p>
        <span className='count'>{this.props.title}</span>
        <a href='#' data-id='increment' onClick={ this.increment } >increment</a>
        <p> {this.props.num} </p>
      </div>
   )
  }
}

const { object, string, func } = PropTypes

Home.propTypes = {
  dispatch: func,
  title: string,
  query: object,
  num: string
}

function mapStateToProps (state, ownProps) {
  return {
    num: state.items.num,
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, null)(Home)
