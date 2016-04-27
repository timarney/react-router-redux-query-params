import React, { Component, PropTypes } from 'react'
import Panel from './Panel'
import ThumbColour from './thumbs/ThumbColour'
import shallowCompare from 'react-addons-shallow-compare'
import { hashHistory } from 'react-router'
import { urlHelper } from '../util/urlHelper'
import { connect } from 'react-redux'

export class ColourPanel extends Component {
  constructor (props) {
    super(props)
    this.select = this.select.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  select (e) {
    e.preventDefault()
    const url = urlHelper(this.props.params, 'colour', e.target.dataset.id)
    hashHistory.push({ pathname: url, search: '?p=true' })
  }

  renderThumbs (colours, active) {
    return colours.map((item) => {
      return (<ThumbColour active={active} key={item.title} title={item.title} select={this.select} />)
    })
  }
  render () {
    const { colours, params } = this.props
    const thumbs = this.renderThumbs(colours, params.colour)
    return <Panel title='Colour Panel'>{thumbs}</Panel>
  }
}

const { array, string, object } = PropTypes

ColourPanel.propTypes = {
  colours: array,
  active: string,
  params: object
}

function mapStateToProps (state, ownProps) {
  return {
    colours: state.colour.colours,
    params: ownProps.params
  }
}

export default connect(mapStateToProps, null)(ColourPanel)
