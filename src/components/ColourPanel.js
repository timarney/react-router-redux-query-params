import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import ThumbColour from './thumbs/ThumbColour'
import shallowCompare from 'react-addons-shallow-compare'
import { connect } from 'react-redux'

export class ColourPanel extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }
  renderThumbs (colours, active) {
    return colours.map((item) => {
      return (<ThumbColour active={active} key={item.title} title= {item.title} />)
    })
  }
  render () {
    const { colours, active } = this.props
    const thumbs = this.renderThumbs(colours, active)
    return <Panel title='Colour Panel'>{thumbs}</Panel>
  }
}

const { array, string } = PropTypes

ColourPanel.propTypes = {
  colours: array,
  active: string
}

function mapStateToProps (state, ownProps) {
  return {
    colours: state.colour.colours,
    active: ownProps.params.color
  }
}

export default connect(mapStateToProps, null)(ColourPanel)
