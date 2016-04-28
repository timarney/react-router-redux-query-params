import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import { connect } from 'react-redux'

export class NumberPanel extends Component {
  render () {
    this.type = 'number'
    this.title = 'My Number Panel!'
    const { data, params } = this.props
    return <Panel data={data} params={params} type={this.type} title={this.title} />
  }
}

const { array, object } = PropTypes

NumberPanel.propTypes = {
  data: array,
  params: object
}

function mapStateToProps (state, ownProps) {
  return {
    data: state.number.numbers,
    params: ownProps.params
  }
}

export default connect(mapStateToProps, null)(NumberPanel)
