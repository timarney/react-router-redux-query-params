import React, { Component } from 'react'
import { urlHelper } from '../util'
import { Link } from 'react-router'

export default class Header extends Component {

  render () {
    let { params } = this.props
    return (
      <div className='header'>
          <Link to={urlHelper(params)} activeClassName='active'>Home</Link>
          <Link to={urlHelper(params, 'number')} activeClassName='active'>Numbers</Link>
          <Link to={urlHelper(params, 'colour')} activeClassName='active'>Colours</Link>
          <p className='selected'>
          Selected = <span className='colour-name'>{params.colour}</span> <span className='number-name'>{params.number}</span>
          </p>
        <div>
          <hr />
        </div>
      </div>
   )
  }
}

const { object } = React.PropTypes

Header.propTypes = {
  params: object
}
