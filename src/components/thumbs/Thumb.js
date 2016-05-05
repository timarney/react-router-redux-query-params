import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Thumb extends Component {
  render () {
    const { title, active, select, img, type } = this.props

    const thumbClass = classNames({
      'thumb': true,
      [type]: true,
      'active': title === active
    })

    return <a href='#' data-id={title} className={thumbClass} onClick={ select }>
              <img className={thumbClass} src={`${img}`} />
              {title}
           </a>
  }
}

const { string, func } = PropTypes

Thumb.propTypes = {
  title: string,
  active: string,
  select: func,
  img: string,
  type: string
}
