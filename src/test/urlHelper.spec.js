/* eslint-env mocha */
import expect from 'expect'
import { urlHelper } from '../util'

describe('urlHelper ', () => {
  it('should use params ', () => {
    const url = urlHelper({ profile: 'pone', colour: 'blue', building: 'three' })
    expect(url).toEqual('/pone/blue/three/')
  })

  it('should use params for profile', () => {
    const url = urlHelper({ profile: 'pone', colour: 'blue', building: 'three' }, 'profile', 'one')
    expect(url).toEqual('/panel/profile/one/blue/three/')
  })

  it('should use params for colour', () => {
    const url = urlHelper({ profile: 'pone', colour: 'blue', building: 'three' }, 'colour', 'red')
    expect(url).toEqual('/panel/colours/pone/red/three/')
  })

  it('should use params for building', () => {
    const url = urlHelper({ profile: 'pone', colour: 'blue', building: 'three' }, 'building', 'a')
    expect(url).toEqual('/panel/building/pone/blue/a/')
  })
})
