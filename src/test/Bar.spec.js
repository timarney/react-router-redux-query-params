/* eslint-env mocha */
require('babel-register')
require('babel-polyfill')

import expect from 'expect'
import React from 'react'
import Bar from '../components/Bar'
import { shallow } from 'enzyme'

describe('<Bar /> ', () => {
  it('should render Bar', () => {
    const wrapper = shallow(<Bar/>)
    expect(wrapper.contains(<div>I am Bar!</div>)).toEqual(true)
  })
})
