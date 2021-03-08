const { expect } = require('@jest/globals')
// const { describe } = require('yargs')
const fns = require('./fibinnicci')

describe('Triangle checker', () => {
  test('should check if tyhe triangle is scalene, isoceles or equalateral', () => {
    expect(fns.checkingTriangle(11, 10, 10)).toEqual(undefined)
  })
})
describe('testing the test to test the test', () => {
  test('it must return true ', () => {
    expect(fns.testingFun('h')).toBe(true)
  })
})
