/* eslint-env mocha */
import expect from 'expect'
import configureStore from '../store/configureStore'

describe('Store ', () => {
  it('should bootstrap ', () => {
    const initialState = { colour: { } }
    const store = configureStore(initialState)
    expect(store.getState()).toContain({ colour: { } })
  })
})
