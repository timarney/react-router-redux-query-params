/* eslint-env mocha */

import expect from 'expect'
import React from 'react'
import { ProfilePanel } from '../components/ProfilePanel'
import { mount } from 'enzyme'

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator

describe('<ProfilePanel /> ', () => {
  it('should render Profile', () => {
    const data = [
                  {'image': 'image1.jpg', 'title': 'one'},
                  {'image': 'image2.jpg', 'title': 'two'},
                  {'image': 'image3.jpg', 'title': 'three'}
    ]
    const wrapper = mount(<ProfilePanel data={data} params={{ number: 'one' }} />)
    // console.log(wrapper.debug())
    expect(wrapper.find('.thumb').length).toEqual(3)
  })
})
