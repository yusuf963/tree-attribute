//! Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. e.g
//? Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')

const pigIt = (str) => {
  return console.log(str.replace(/(\w)(\w*)(\s|$)/g, '\$2'))
}

pigIt(' Brick lane')