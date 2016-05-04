/* eslint-env mocha */

import expect from 'expect'
import { appParams as defaultParams } from '../util/defaultParams'

const initialState = { colour: {default: 'red'},
                       number: {default: 'two'}
                     }

describe('defaultParams', () => {
  it('should render default Params', () => {
    const params = defaultParams(initialState)
    expect(params).toEqual(undefined)
  })

  it('should render colour blue', () => {
    const params = defaultParams(initialState, { colour: 'blue' })
    expect(params).toEqual({colour: 'blue', number: 'two'})
  })

  it('should render number three', () => {
    const params = defaultParams(initialState, { number: 'three' })
    expect(params).toEqual({colour: 'red', number: 'three'})
  })

  it('should render based on params', () => {
    const params = defaultParams(initialState, { colour: 'blue', number: 'three' })
    expect(params).toEqual({colour: 'blue', number: 'three'})
  })
})
