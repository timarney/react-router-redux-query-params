/* eslint-env mocha */
import expect from 'expect'
import { urlHelper } from '../util'

describe('urlHelper ', () => {
  it('should render default URL', () => {
    const url = urlHelper()
    expect(url).toEqual('/home/red/two/')
  })

  it('should render color URL', () => {
    const url = urlHelper(undefined, 'colour', 'blue')
    expect(url).toEqual('/colours/blue/two/')
  })

  it('should render number URL', () => {
    const url = urlHelper(undefined, 'number', 'one')
    expect(url).toEqual('/numbers/red/one/')
  })

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

  it('should use default number and numbers route', () => {
    const url = urlHelper(undefined, 'number')
    expect(url).toEqual('/numbers/red/two/')
  })

  it('should use default colour and colours route', () => {
    const url = urlHelper(undefined, 'colour')
    expect(url).toEqual('/colours/red/two/')
  })
})
