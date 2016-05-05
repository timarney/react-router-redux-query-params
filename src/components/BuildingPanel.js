import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import { connect } from 'react-redux'

export class BuildingPanel extends Component {
  render () {
    this.type = 'building'
    this.title = 'Home Style'
    const { data, params } = this.props
    return <Panel width={180} data={data} params={params} type={this.type} title={this.title} />
  }
}

const { array, object } = PropTypes

BuildingPanel.propTypes = {
  data: array,
  params: object
}

function mapStateToProps (state, ownProps) {
  return {
    data: state.building.buildings,
    params: ownProps.params
  }
}

export default connect(mapStateToProps, null)(BuildingPanel)
