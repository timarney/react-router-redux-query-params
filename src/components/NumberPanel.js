import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import { connect } from 'react-redux'
import { defaultParams } from '../util'

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
  const params = defaultParams(ownProps.params)
  return {
    data: state.number.numbers,
    params: params
  }
}

export default connect(mapStateToProps, null)(NumberPanel)
