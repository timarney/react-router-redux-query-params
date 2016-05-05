/* eslint-env mocha */
import expect from 'expect'
import { dataHelper } from '../util'

describe('dataHelper ', () => {
  it('should use get third obj ', () => {
    const profiles = [
      {'image': '1.jpg', 'title': 'pone', 'text': 'AR Series'},
      {'image': '2.jpg', 'title': 'ptwo', 'text': 'NS Series'},
      {'image': '3.jpg', 'title': 'pthree', 'text': 'Century Series'}
    ]

    const val = dataHelper.getObj(profiles, 'pthree', 'title')
    expect(val).toEqual(profiles[2])
  })

  it('should use get text ', () => {
    const profiles = [
      {'image': '1.jpg', 'title': 'pone', 'text': 'AR Series'},
      {'image': '2.jpg', 'title': 'ptwo', 'text': 'NS Series'},
      {'image': '3.jpg', 'title': 'pthree', 'text': 'Century Series'}
    ]

    const obj = dataHelper.getObj(profiles, 'pthree', 'title')
    const val = dataHelper.getProp(obj, 'text')
    expect(val).toEqual('Century Series')
  })

  it('should return empty string ', () => {
    const val = dataHelper.getProp(undefined, 'text')
    expect(val).toEqual('')
  })
})
