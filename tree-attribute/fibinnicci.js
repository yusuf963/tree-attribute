const checkingTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return console.log('any of triangle sides can not be 0 or less')
  } else if (a == b && b == c) {
    return console.log(' this triangle is equilateral')
  } else if (a != b && b != c && a != c) {
    return console.log(' this triangle is scalene')
  } else {
    return console.log('this triangle is isoceles')
  }
}

console.log('d', checkingTriangle(10, 11, 11))

// ! find the number if it repeaded in the array
num1 = [2, 3, 3, 1, 2]

for (let i = 0; i < num1.length; i++) {
  for (let j = i + 1; j < num1.length; j++) {
    if (num1[i] == num1[j]) {
      // console.log('it is')
    }
  }
}

// ! sorting
const spanish = ['ú', 'ál', 'f']

spanish.sort((a, b) => {
  return a.localeCompare(b)
})
const number1 = [2, 5, 6, 3, 5, 6, 89, 12, 33, -4]
const number2 = [7, -97, 6, 5, 5, -3, 8, -1862, 3, 7]

const sortNumbers = (arr) => {
  arr.sort((a, b) => {
    return a - b
  })
}
sortNumbers(number1)
sortNumbers(number2)
// console.log(number1)
// console.log(number2)
// console.log(number1[0])
// console.log(number1[number1.length - 1])

const testingFun = (str) => {
  return true
}
module.exports = {
  checkingTriangle,
  testingFun
}

// const new1 = [1, 4, 3, 6, 7, -1]
// const acculator = (arr) => {
//   arr.reduce((sum, num) => {
//     const net = sum + num
//     console.log(net)
//     return net
//   }, -5.5)
// }
// acculator(new1)


