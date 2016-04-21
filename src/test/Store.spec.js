/* eslint-env mocha */
require('babel-register')
require('babel-polyfill')

import expect from 'expect'
import configureStore from '../store/configureStore'

describe('Store ', () => {
  it('should bootstrap ', () => {
    const initialState = { items: { num: 0 } }
    const store = configureStore(initialState)
    expect(store.getState()).toEqual({ items: { num: 0 } })
  })
})
