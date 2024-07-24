// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b)
{
  let bigger = 0
  let lower = 0
  let res = lower

  if (a > b){
    bigger = a
    lower = b
  } else {
    bigger = b
    lower = a
  }

  for (let i = lower; i <= bigger; i++ ){
    res += i
  }

  return res
}