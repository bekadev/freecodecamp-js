// https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f/train/javascript


function ascendDescend(length, minimum, maximum) {
  let result = ''
  for (let i = minimum; i <= maximum; i++){
    result += i
  }
  for (let i = maximum - 1; i > minimum; i--){
    result += i
  }
  result = result.repeat(length)
  return result.substring(0, length)
}
