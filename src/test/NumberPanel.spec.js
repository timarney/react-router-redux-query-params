/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import { NumberPanel } from '../components/NumberPanel'
import { mount } from 'enzyme'

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator

describe('<NumberPanel /> ', () => {
  it('should render Numbers', () => {
    const data = [
                  {'image': 'image1.jpg', 'title': 'one'},
                  {'image': 'image2.jpg', 'title': 'two'},
                  {'image': 'image3.jpg', 'title': 'three'}
    ]
    const wrapper = mount(<NumberPanel data={data} params={{ number: 'one' }} />)
    // console.log(wrapper.debug())
    expect(wrapper.find('.thumb').length).toEqual(3)
  })
})
