/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import { App } from '../components/App'
import { shallow } from 'enzyme'

describe('<App /> ', () => {
  it('should render App', () => {
    const location = { pathname: '' }
    const wrapper = shallow(<App location={location}><div>Test</div></App>)
    expect(wrapper.find('.app').length).toEqual(1)
  })
})
