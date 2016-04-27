/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import { Home } from '../components/Home'
import { shallow } from 'enzyme'

describe('<Home /> ', () => {
  it('should render Home', () => {
    const wrapper = shallow(<Home colour='red' number=''/>)
    expect(wrapper.contains(<span className='colour-name'>red</span>)).toEqual(true)
  })
})
