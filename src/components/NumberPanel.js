import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import ThumbColour from './thumbs/ThumbColour'
import shallowCompare from 'react-addons-shallow-compare'
import { connect } from 'react-redux'

export class NumberPanel extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
  renderThumbs (numbers, active) {
    return numbers.map((item) => {
      return (<ThumbColour active={active} key={item.title} title= {item.title} />)
    })
  }
  render () {
    const { numbers, active } = this.props
    const thumbs = this.renderThumbs(numbers, active)
    return <Panel title='Number Panel'>{thumbs}</Panel>
  }
}

const { array, string } = PropTypes

NumberPanel.propTypes = {
  numbers: array,
  active: string
}

function mapStateToProps (state, ownProps) {
  return {
    numbers: state.number.numbers,
    active: state.number.active
  }
}

export default connect(mapStateToProps, null)(NumberPanel)
