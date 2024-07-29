// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript


function SeriesSum(n) {
  let res = 0

  for (let i = 0; i < n; i++){
    res += 1 /(1 + i * 3)
  }

  return res.toFixed(2)
}


// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
  let res = arr.sort((a,b) => a - b)
  return ([res[0], res[res.length-1]])
}


// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript


function removeSmallest(num) {
  if (num.length < 2){
    return []
  }

  let numbers = [...num]
  let sort = numbers.sort((a, b) => a - b)
  let index = num.indexOf(sort[0])
  let res = [...num]
  let res2 = res.splice(index, 1)

  return res
}


// https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

function breakChocolate(n,m) {
  return n * m === 0 ? 0 : n * m - 1
}


// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
  let res = 0

  for (let i = 1; i <= n; i++){
    if(n % i === 0){
      res++
    }
  }

  return res
}

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
  let res = 0

  for (let i = 0; i < sheep.length; i++){
    if(sheep[i] === true){
      res++
    }
  }
  return res
}


// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

const stringToNumber = function(str){
  return parseInt(str)
}