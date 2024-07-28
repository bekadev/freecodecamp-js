// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  let res = []

  for (let i = 2; i < integer; i++){
    if (integer % i === 0) {
      res.push(i)
    }
  }
  if(res.length < 1){
    return `${integer} is prime`
  }
  return res
}