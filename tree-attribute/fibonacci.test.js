const { expect } = require('@jest/globals')
const { describe } = require('yargs')
const fns = require('./js')

describe('Triangle checker', () => {
  test('should check if tyhe triangle is scalene, isoceles or equalateral', () => {
    expect(fns.checkingTriangle(11, 10, 10)).toBe('this triangle is isoceles')
  })

})


console.log('fffff', fns)