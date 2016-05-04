import React, { Component } from 'react'
import { urlHelper } from '../util'
import { Link } from 'react-router'

export default class Header extends Component {

  showLabel (e) {
    e.preventDefault()
    let txt = e.target.dataset.text
    console.log(txt)
  }
  hideLabel () {
    console.log('hide')
  }
  renderLink (type, txt, icon) {
    let { params } = this.props
    return (
      <Link to={urlHelper(params, type)} data-text={txt} activeClassName='active' onMouseEnter={this.showLabel} onMouseLeave={this.hideLabel}>
        <img src={`img/icons/${icon}`} />
      </Link>
    )
  }
  render () {
    return (
      <div className='header'>
          <div className='label'>Selected</div>
          {this.renderLink('profile', 'Profile Selection', 'ico-menu-profile.svgz')}
          {this.renderLink('colour', 'Colour Selection', 'ico-menu-color.svgz')}
          {this.renderLink('building', 'Home Style Selection', 'ico-menu-home-style.svgz')}
      </div>
   )
  }
}

const { object } = React.PropTypes

Header.propTypes = {
  params: object
}
