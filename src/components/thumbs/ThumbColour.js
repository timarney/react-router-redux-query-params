import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ThumbColour extends Component {
  render () {
    const { title, active, select, img } = this.props

    const thumbClass = classNames({
      'active': title === active
    })

    return <a href='#' data-id={title} className={thumbClass} onClick={ select }>
            <div className='thumb'>
              <img src={`/img/${img}`} />
              <div className='title'>{title}</div>
            </div>
           </a>
  }
}

const { string, func } = PropTypes

ThumbColour.propTypes = {
  title: string,
  active: string,
  select: func
}
