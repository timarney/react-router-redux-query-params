import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ThumbColour extends Component {
  render () {
    const { title, active } = this.props

    const thumbClass = classNames({
      'active': title === active
    })

    return <a href='#' className={thumbClass}><div className='thumb'>
            <img src='/img/thumb.png' />
            <div className='title'>{title}</div>
            </div>
           </a>
  }
}

const { string } = PropTypes

ThumbColour.propTypes = {
  title: string,
  active: string
}
