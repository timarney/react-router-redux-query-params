/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import { Home } from '../components/Home'
import { shallow } from 'enzyme'

describe('<Home /> ', () => {
  it('should render Home', () => {
    const wrapper = shallow(<Home title='Hello'/>)
    expect(wrapper.contains(<span className='count'>Hello</span>)).toEqual(true)
  })
})
