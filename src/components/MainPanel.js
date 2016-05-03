import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryHelper } from '../util'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class MainPanel extends Component {

  constructor (props) {
    super(props)
    this.state = { mounted: false }
  }

  componentDidMount () {
    this.setState({ mounted: true })
  }

  renderChildren (child, animate, transitionName = 'panel') {
    return (
      <ReactCSSTransitionGroup
        component='div'
        transitionName={transitionName}
        transitionEnter={animate}
        transitionLeave={animate}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
      {child}
      </ReactCSSTransitionGroup>
    )
  }

  render () {
    const { query } = this.props
    /* query val gets passed
       to avoid animation
       if on same panel
    */
    const queryVals = queryHelper(query)
    let child = this.props.children

    if (!this.state.mounted) {
      child = null
    } else {
      child = React.cloneElement(child, { key: this.props.location.pathname })
    }

    return (
     <div>
       { this.renderChildren(child, queryVals.anim) }
     </div>
    )
  }
}

const { element, object } = React.PropTypes

MainPanel.propTypes = {
  children: element,
  location: object,
  params: object,
  query: object
}

function mapStateToProps (state, ownProps) {
  return {
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, null)(MainPanel)
