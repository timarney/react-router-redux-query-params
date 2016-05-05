import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import { connect } from 'react-redux'

export class ColourPanel extends Component {
  render () {
    this.type = 'colour'
    this.title = 'Colour'
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
  return {
    data: state.colour.colours,
    params: ownProps.params
  }
}

export default connect(mapStateToProps, null)(ColourPanel)
