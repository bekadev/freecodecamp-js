// https://www.codewars.com/kata/56efab15740d301ab40002ee/javascript

function gcdi(x,y) {
  if (y) {
    return gcdi(y,x % y)
  }
  return Math.abs(x)
}
function lcmu(a, b) {
  return Math.abs(a * b) / gcdi(a,b)
}
function som(a, b) {
  return a + b
}
function maxi(a, b) {
  return Math.max(a,b)
}
function mini(a, b) {
  return Math.min(a,b)
}
function operArray(fct, arr, init) {
  let result = []
  for (let i = 0; i < arr.length; i++){
    result.push(fct(init, arr[i]))
    init = result[i]
  }
  return result
}
