/* eslint-env mocha */
import expect from 'expect'
import { urlHelper } from '../util'

describe('urlHelper ', () => {
  it('should use params ', () => {
    const url = urlHelper({ colour: 'blue', number: 'three' })
    expect(url).toEqual('/home/blue/three/')
  })

  it('should use params for colour', () => {
    const url = urlHelper({ colour: 'blue', number: 'three' }, 'number', 'one')
    expect(url).toEqual('/numbers/blue/one/')
  })

  it('should use params for number', () => {
    const url = urlHelper({ colour: 'blue', number: 'three' }, 'colour', 'red')
    expect(url).toEqual('/colours/red/three/')
  })
})
