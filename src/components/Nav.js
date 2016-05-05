import React, { Component } from 'react'
import { urlHelper } from '../util'
import { Link } from 'react-router'

const links = [
  {type: 'profile', txt: 'Profile Selection', icon: 'ico-menu-profile.svgz'},
  {type: 'colour', txt: 'Colour Selection', icon: 'ico-menu-color.svgz'},
  {type: 'building', txt: 'Home Style Selection', icon: 'ico-menu-home-style.svgz'}
]

export default class Nav extends Component {

  constructor (props) {
    super(props)
    this.overLabel = false
    this.routerLabel = false
    this.showLabel = this.showLabel.bind(this)
    this.hideLabel = this.hideLabel.bind(this)
  }

  showLabel (e) {
    e.preventDefault()
    let txt = e.target.dataset.text
    this.overLabel = txt
    this.forceUpdate()
  }
  hideLabel () {
    this.overLabel = false
    this.forceUpdate()
  }
  componentWillUnmount () {
    console.log('unmount')
  }
  renderLink (type, txt, icon) {
    const { params } = this.props
    const url = urlHelper(params, type)

    if (this.context.router.isActive(url)) {
      this.routerLabel = txt
    }

    return (
      <Link key={type} to={url} data-text={txt} activeClassName='active' onMouseEnter={this.showLabel} onMouseLeave={this.hideLabel}>
        <img src={`img/icons/${icon}`} />
      </Link>
    )
  }
  renderLinks () {
    return links.map((item) => this.renderLink(item.type, item.txt, item.icon))
  }
  render () {
    const { selectedText } = this.props
    this.routerLabel = false
    const links = this.renderLinks()
    let label = this.overLabel ? this.overLabel : this.routerLabel

    return (
      <div className='nav'>
          <div className='label selected-label'>{selectedText}</div>
          <div className='label'>{label}</div>
          {links}
      </div>
   )
  }
}

const { string, object } = React.PropTypes

Nav.propTypes = {
  params: object,
  selectedText: string
}

Nav.contextTypes = {
  router: object
}
