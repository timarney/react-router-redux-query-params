import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import ThumbColour from './thumbs/ThumbColour'
import shallowCompare from 'react-addons-shallow-compare'
import { hashHistory } from 'react-router'
import { urlHelper } from '../util/urlHelper'
import { connect } from 'react-redux'

export class NumberPanel extends Component {
  constructor (props) {
    super(props)
    this.select = this.select.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  select (e) {
    e.preventDefault()
    const url = urlHelper(this.props.params, 'number', e.target.dataset.id)
    hashHistory.push({ pathname: url, search: '?p=true' })
  }

  renderThumbs (numbers, active) {
    return numbers.map((item) => {
      return (<ThumbColour active={active} key={item.title} title= {item.title} select={this.select} />)
    })
  }
  render () {
    const { numbers, params } = this.props
    const thumbs = this.renderThumbs(numbers, params.number)
    return <Panel title='Number Panel'>{thumbs}</Panel>
  }
}

const { array, object } = PropTypes

NumberPanel.propTypes = {
  numbers: array,
  params: object
}

function mapStateToProps (state, ownProps) {
  return {
    numbers: state.number.numbers,
    active: ownProps.params.number,
    colour: ownProps.params.colour
  }
}

export default connect(mapStateToProps, null)(NumberPanel)
