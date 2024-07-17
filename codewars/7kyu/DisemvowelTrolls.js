// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let res = '';
  for(let i = 0; i < str.length; i++){
    if(!'aeiou'.includes(str[i].toLowerCase())){
      res += str[i]
    }
  }

  return res;
}