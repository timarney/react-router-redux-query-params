import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { colour, number } = this.props

    return (
      <div>
        <h1>HOME</h1>
        <span className='colour-name'>{colour}</span>
        <span className='number-name'>{number}</span>
      </div>
   )
  }
}

const { string } = PropTypes

Home.propTypes = {
  colour: string,
  number: string
}

function mapStateToProps (state, ownProps) {
  return {
    colour: ownProps.params.colour,
    number: ownProps.params.number
  }
}

export default connect(mapStateToProps, null)(Home)
