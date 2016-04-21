/* eslint-env mocha */
require('babel-register')
require('babel-polyfill')

import expect from 'expect'
import React from 'react'
import Foo from '../components/Foo'
import { shallow } from 'enzyme'

describe('<Foo /> ', () => {
  it('should render Foo', () => {
    const wrapper = shallow(<Foo/>)
    expect(wrapper.contains(<div>I am Foo!</div>)).toEqual(true)
  })
})
