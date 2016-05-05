/* eslint-env mocha */

import expect from 'expect'
import React from 'react'
import { BuildingPanel } from '../components/BuildingPanel'
import { mount } from 'enzyme'

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator

describe('<BuildingPanel /> ', () => {
  it('should render BuildingPanel', () => {
    const data = [
                  {'image': 'image1.jpg', 'title': 'red'},
                  {'image': 'image2.jpg', 'title': 'blue'}
    ]
    const wrapper = mount(<BuildingPanel data={data} params={{ colour: 'blue' }} />)
    // console.log(wrapper.debug())
    expect(wrapper.find('img.thumb').length).toEqual(2)
  })
})
