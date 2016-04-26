/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import ThumbColour from '../components/thumbs/ThumbColour'
import { shallow } from 'enzyme'

describe('<ThumbColour /> ', () => {
  it('should render ThumbColour', () => {
    const wrapper = shallow(<ThumbColour title='hello'/>)
    expect(wrapper.contains(<div className='title'>hello</div>)).toEqual(true)
  })
})
