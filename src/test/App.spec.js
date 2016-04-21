/* eslint-env mocha */
require('babel-register')
require('babel-polyfill')

import expect from 'expect'
import React from 'react'
import App from '../components/App'
import { shallow } from 'enzyme'

describe('<App /> ', () => {
  it('should render App', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.contains(<p>Links:</p>)).toEqual(true)
  })
})
