// ! this could refer to the obj or refer to global
const video = {
  title: 'game',
  play() {
    console.log(this)
  }
}
video.stop = function () {
  console.log(this)
}
video.stop()

function checking() {
  console.log(this)
}
// checking()
// console.log(this)
// video.play()

// ! binding
const c1 = {
  x: 12,
  y: 25
}
const c2 = {
  x: 50,
  y: 75
}

function printCoordinate() {
  console.log(this.x, ', ', this.y)
}
const c1_func = printCoordinate.bind(c1)
const c2_func = printCoordinate.bind(c2)
c1_func()
c2_func()