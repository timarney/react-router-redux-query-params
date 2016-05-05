import React, { Component } from 'react'
import { defaultParams, dataHelper } from '../util'
import { connect } from 'react-redux'
import { Nav } from './index'

export class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let { params, profiles } = this.props
    params = defaultParams(typeof (params) === 'object' ? params : {})
    let obj = dataHelper.getObj(profiles, params.profile, 'title')
    let txt = dataHelper.getProp(obj, 'text')

    return (
      <div className='app'>
        <div className='container'>
        { this.props.children }
        </div>
        <Nav selectedText={txt} params={params} />
      </div>
   )
  }
}

const { array, element, object } = React.PropTypes

App.propTypes = {
  children: element,
  location: object,
  profiles: array,
  params: object,
  query: object
}

function mapStateToProps (state, ownProps) {
  return {
    profiles: state.profile.profiles,
    params: typeof (ownProps.params) === 'object' ? ownProps.params : {},
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, null)(App)
