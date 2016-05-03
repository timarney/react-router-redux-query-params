import React, { Component } from 'react'
import Loader from 'halogen/PulseLoader'
import ImageLoader from 'react-imageloader'

function preloader () {
  return <Loader color='#26A65B' size='16px' margin='4px' />
}

export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        <h1>HOME</h1>
      </div>
   )
  }
}
