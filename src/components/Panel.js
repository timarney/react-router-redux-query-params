import React, { Component, PropTypes } from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import ThumbColour from './thumbs/ThumbColour'
import { urlHelper } from '../util/urlHelper'
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
    const url = urlHelper(this.props.params, this.props.type, e.target.dataset.id)
    hashHistory.push({ pathname: url, search: '?p=true' })
  }
  renderThumbs (data, active) {
    return data.map((item) => {
      return (<ThumbColour active={active} key={item.title} title={item.title} select={this.select} />)
    })
  }

  render () {
    const { title, data, params, type } = this.props
    const thumbs = this.renderThumbs(data, params[type])
    return (
          <div className='panel'>
            <div className='panel-title'>
              <span>{title}</span>
              <span className='close'><a href='#' onClick={ () => hashHistory.push('/')} >X</a></span>
              </div>
            <div className='panel-thumbs'>{thumbs}</div>
           </div>
      )
  }
}

const { string, node, object, array } = PropTypes

Panel.propTypes = {
  type: string,
  data: array,
  title: string,
  children: node,
  params: object
}
