/* eslint-env mocha */

import expect from 'expect'
import React from 'react'
import Thumb from '../components/thumbs/Thumb'
import { shallow } from 'enzyme'

describe('<Thumb /> ', () => {
  it('should render Thumb', () => {
    const wrapper = shallow(<Thumb title='hello'/>)
    expect(wrapper.find('img.thumb').length).toEqual(1)
  })
})
