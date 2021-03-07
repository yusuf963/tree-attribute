// !Fibonnacci puzzile
// ? the new number is the sum of the last two number



const fibonnacci = (number1) => {
  let arr = [0, 1]
  for (let i = 0; i <= number1; i++) {
    if (arr.indexOf(i) == arr.length - 2) {
      const calculation = arr.indexOf(i) + arr[arr.length - 1]
      // console.log(arr.indexOf(i), arr[arr.length - 1])
      // console.log(calculation)
      arr.push(calculation)
      // console.log('here', arr)
    }
  }
}
fibonnacci(100)


arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] === 7) {
    // console.log(arr12[i], 'got em its seven, 🧲')
    break
  }
}


const fib = (num) => {
  if (num <= 1) {
    return num
  }
  return fib(num - 1) + fib(num - 2)
}
// console.log(fib(13))






const fibbanacci1 = (num) => {
  if (num <= 1) {
    return console.log(`${num} is invalied to preform this puzzle. Please provide 2 or greater number.`);
  }
  const result = [1, 2]
  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    console.log(prevNum2, prevNum1)
    result.push(prevNum1 + prevNum2)
  }
  console.log(result)
}
fibbanacci1(5)

// ! recursive
const fibona = (n) => {
  if (n <= 1) {
    return n
  } else {
    return fibona(n - 1) + fibona(n - 2)
  }
}
console.log('pro', fibona(13))

