import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <header>
          <p>Links:</p>
          {' '}
          <Link to={{ pathname: '/home/', query: { somevar: 'nice-this-works' } }} >Test Get Query Param</Link>
          {' | '}
          <Link to='/foo'>Foo</Link>
          {' | '}
          <Link to='/bar'>Bar</Link>
        </header>
        <div>
          <p><button onClick={() => hashHistory.push('/foo')}>Go to /foo</button></p>
          <hr />
        </div>
        {this.props.children}
      </div>
   )
  }
}

const { element } = React.PropTypes

App.propTypes = {
  children: element
}
