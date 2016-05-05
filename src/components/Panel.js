import React, { Component, PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import Thumb from './thumbs/Thumb'
import { urlHelper, defaultParams } from '../util'
import { hashHistory } from 'react-router'
export default class Panel extends Component {
  constructor (props) {
    super(props)
    this.select = this.select.bind(this)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
  select (e) {
    e.preventDefault()
    const params = defaultParams(this.props.params)
    const url = urlHelper(params, this.props.type, e.currentTarget.dataset.id)
    hashHistory.push({ pathname: url, search: '?p=true' })
  }
  renderThumbs (data, active, type) {
    return data.map((item) => {
      let imgpath = `img/${type}/${item.image}`
      return (
          <Thumb
            active={active}
            key={item.title}
            title={item.title}
            img={imgpath}
            type={type}
            select={this.select}
            />
        )
    })
  }

  render () {
    const { title, data, params, type, width } = this.props
    // note: params holds active items
    const thumbs = this.renderThumbs(data, params[type], type)
    const divStyle = parseInt(width, 10) ? { width } : {}

    return (
          <div className='panel' style={divStyle}>
            <div className='panel-title'>
              <span>{title}</span>
              <span className='panel-close'><a href='#' onClick={ () => hashHistory.push('/')} >X</a></span>
              </div>
            <div className='panel-thumbs'>{thumbs}</div>
           </div>
      )
  }
}

const { string, number, node, object, array } = PropTypes

Panel.propTypes = {
  type: string,
  data: array,
  title: string,
  children: node,
  params: object,
  width: number
}
