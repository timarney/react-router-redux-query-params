import React, { Component, PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import { hashHistory } from 'react-router'

export default class Panel extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
  render () {
    const { title } = this.props
    return (
          <div className='panel'>
            <div className='panel-title'>
              <span>{title}</span>
              <span className='close'><a href='#' onClick={ () => hashHistory.push('/')} >X</a></span>
              </div>
            <div className='panel-thumbs'>{this.props.children}</div>
           </div>
      )
  }
}

const { string, node } = PropTypes

Panel.propTypes = {
  title: string,
  children: node
}
