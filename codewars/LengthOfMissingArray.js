// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/javascript

function getLengthOfMissingArray(arrayOfArrays) {
  let res = (arrayOfArrays || []).map(e =>e ? e.length : 0)
    .sort((a, b) => a - b )
  if(res.includes(0)){
    return 0
  }
  for (let i = 0; i < res.length; i++){
    if(res[i + 1] != res[i] + 1){
      return res[i] + 1
    }
  }
  return 0;
}
