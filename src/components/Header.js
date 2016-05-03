import React, { Component } from 'react'
import { urlHelper } from '../util'
import { Link } from 'react-router'

export default class Header extends Component {

  render () {
    let { params } = this.props
    return (
      <div className='header'>
          <Link to={urlHelper(params)} activeClassName='active'>
            <img src='img/icons/ico-menu-profile.svgz' />
          </Link>
          <Link to={urlHelper(params, 'number')} activeClassName='active'>
            <img src='img/icons/ico-menu-color.svgz' />
          </Link>
          <Link to={urlHelper(params, 'colour')} activeClassName='active'>
            <img src='img/icons/ico-menu-home-style.svgz' />
          </Link>
        <div>
        </div>
      </div>
   )
  }
}

const { object } = React.PropTypes

Header.propTypes = {
  params: object
}
