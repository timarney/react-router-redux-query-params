import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import { connect } from 'react-redux'
import { defaultParams } from '../util'

export class ColourPanel extends Component {
  render () {
    this.type = 'colour'
    this.title = 'My Colour Panel'
    const { data, params } = this.props
    return <Panel data={data} params={params} type={this.type} title={this.title} />
  }
}

const { array, object } = PropTypes

ColourPanel.propTypes = {
  data: array,
  params: object
}

function mapStateToProps (state, ownProps) {
  const params = defaultParams(ownProps.params)
  return {
    data: state.colour.colours,
    params: params
  }
}

export default connect(mapStateToProps, null)(ColourPanel)
