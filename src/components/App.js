import React, { Component } from 'react'
import { defaultParams } from '../util'
import { connect } from 'react-redux'
import { Header } from './index'

export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { params } = this.props
    params = defaultParams(typeof (params) === 'object' ? params : {})
    return (
      <div className='app'>
        <div className='container'>
        { this.props.children }
        </div>
        <Header params={params} />
      </div>
   )
  }
}

const { element, object } = React.PropTypes

App.propTypes = {
  children: element,
  location: object,
  params: object,
  query: object
}

function mapStateToProps (state, ownProps) {
  return {
    params: typeof (ownProps.params) === 'object' ? ownProps.params : {},
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, null)(App)
