/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import { ColourPanel } from '../components/ColourPanel'
import { mount } from 'enzyme'

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator

describe('<ColourPanel /> ', () => {
  it('should render Colours', () => {
    const data = [
                  {'image': 'image1.jpg', 'title': 'red'},
                  {'image': 'image2.jpg', 'title': 'blue'}
    ]
    const wrapper = mount(<ColourPanel colours={data} active='blue' />)
    //console.log(wrapper.debug())
    expect(wrapper.find('.thumb').length).toEqual(2)
  })
})
