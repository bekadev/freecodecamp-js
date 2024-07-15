// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript

function persistence(num) {
  let res = 0,
    str = String(num)

  while(str.length > 1){
    str = String([...str].reduce((prev, curr) => prev * curr))
    res++
  }
  return res
}