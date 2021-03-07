let arr = ['a', 'c', 'b', 'z', 'e']
arr.push('d')
arr.unshift('k')
arr = ['start', ...arr, 'end']
let say = 'hello'
const new1 = say.toUpperCase()
const new2 = arr[0].toUpperCase()
console.log(new1)
console.log(new2)
console.log(arr)


let upperCharArr = []
for (let i = 0; i < arr.length; i++) {
  const word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  upperCharArr.push(word)
}
console.log(upperCharArr)


const converter = (sentence) => {
  const toArray1 = sentence.split(' ')
  for (let i = 0; i < toArray1.length; i++) {
    const ready = toArray1[i].charAt(0).toUpperCase() + toArray1[i].slice(1)
    console.log(ready)
  }
}

converter('brick lane')

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
const checkingEmptryValue = (arr) => {
  filteredArray = arr.filter(item => item || item === 0)
  console.log(filteredArray)
}
checkingEmptryValue([0, false, [], undefined, {}, NaN, 'Kevin'])

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
// const bbbb = ['erg', '234', 'Hello']
const randomPick = (arr) => {
  console.log(arr.length)
  const randomitem = Math.floor(Math.random() * arr.length)
  const pickedItem = arr[randomitem]
  console.log(pickedItem)
}
randomPick([1, "elephant", "apple", 67])

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
const lowsetAndHieghst = (arr) => {
  let lowsetAndHieghstArray = []
  const sortedArray = arr.sort((a, b) => {
    return a - b
  })
  lowsetAndHieghstArray = [...lowsetAndHieghstArray, sortedArray[1]]
  lowsetAndHieghstArray = [...lowsetAndHieghstArray, sortedArray[sortedArray.length - 2]]
  console.log(lowsetAndHieghstArray)
}
lowsetAndHieghst([1, 2, 3, 4, 6, 7, 8, 5])

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]


// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]


// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]


// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }


// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];