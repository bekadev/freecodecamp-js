

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
  let res = str.split(' ').map(e => e.split('').reverse().join('')).join(' ')

  return res
}
