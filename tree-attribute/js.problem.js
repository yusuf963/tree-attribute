/* eslint-disable no-unused-vars */

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const FilterdArray = array.filter(element => element || element === 0)
  return FilterdArray
}
// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
// const bbbb = ['erg', '234', 'Hello']
function randomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const secondLowestSecondHighestArray = []
  //sorting the array
  const sortedArray = array.sort(function (a, b) {
    return (a - b)
  })
  secondLowestSecondHighestArray.push(sortedArray[1])
  secondLowestSecondHighestArray.push(sortedArray[array.length - 2])
  return secondLowestSecondHighestArray
}


// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  let pence = price * 100
  const coins = [100, 50, 20, 20, 5, 2, 1]
  const result = []
  coins.forEach((coin) => {
    while (pence - coin >= 0) {
      pence -= coin
      result.push(coin)
    }
  })
  console.log(result)
}
coins(4)
// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const aaa = Array.from(new Set(arr1.concat(arr2)))
  console.log(aaa)
}
mergeUnique([9, 8, 8, 9], [7, 8, 8, 7])


// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  return array.map((string) => {
    const object = {}
    object[key] = string
    return object
  })
}
console.log(arrayToObjects(["Mike", "Emily"], "name"))

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  return Object.keys(object).map((key) => {
    return [key, object[key]]
  })
}

console.log(objectToArray({ name: 'Will Smith', dob: '15-09-1968' }))
// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
const numOfOccurances = (string) => {
  const toArray = Array.from(string)
  return string.toLowerCase().replace(/ /gi, '').split('').reduce((obj, letter) => {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1
    return obj
  }, {})
  // const newStuff = Array.from(new Set(toArray1))
  // console.log(newStuff)
  // console.log('metod', toArray1)
}
console.log('jjj', numOfOccurances('hello world'))

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
const fibonacci = (num) => {
  const arr = [0]
  for (let i = 1; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1] || 1)
  }
  console.log(arr)
  return arr
}
fibonacci(7)
console.log(typeof typeof 1)

module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  arrayToObjects,
  objectToArray,
  numOfOccurances,
  fibonacci
}