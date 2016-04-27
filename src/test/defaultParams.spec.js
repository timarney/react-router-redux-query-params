/* eslint-env mocha */
import expect from 'expect'
import { defaultParams } from '../util/'

describe('defaultParams', () => {
  it('should render default Params', () => {
    const params = defaultParams()
    expect(params).toEqual({colour: 'red', number: 'two'})
  })

  it('should render colour blue', () => {
    const params = defaultParams({ colour: 'blue' })
    expect(params).toEqual({colour: 'blue', number: 'two'})
  })

  it('should render number three', () => {
    const params = defaultParams({ number: 'three' })
    expect(params).toEqual({colour: 'red', number: 'three'})
  })

  it('should render based on params', () => {
    const params = defaultParams({ colour: 'blue', number: 'three' })
    expect(params).toEqual({colour: 'blue', number: 'three'})
  })
})
