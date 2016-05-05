import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import { connect } from 'react-redux'

export class ProfilePanel extends Component {
  render () {
    this.type = 'profile'
    this.title = 'Profile'
    const { data, params } = this.props
    return <Panel data={data} params={params} type={this.type} title={this.title} />
  }
}

const { array, object } = PropTypes

ProfilePanel.propTypes = {
  data: array,
  params: object
}

function mapStateToProps (state, ownProps) {
  return {
    data: state.profile.profiles,
    params: ownProps.params
  }
}

export default connect(mapStateToProps, null)(ProfilePanel)
