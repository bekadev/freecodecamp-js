// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
  let res = 0

  for (let i = 0; i < busStops.length; i++){
    res += busStops[i][0] - busStops[i][1]
  }

  return res
}