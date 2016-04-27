/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import Home from '../components/Home'
import { shallow } from 'enzyme'

describe('<Home /> ', () => {
  it('should render Home', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('.home').length).toEqual(1)
  })
})
