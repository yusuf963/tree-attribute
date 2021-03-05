const checkingTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log('any of triangle sides can not be 0 or less')
  } else if (a == b && b == c) {
    console.log(' this triangle is equilateral')
  } else if (a != b && b != c && a != c) {
    console.log(' this triangle is scalene')
  } else {
    console.log('this triangle is isoceles')
  }
}

checkingTriangle(11, 11, 11)