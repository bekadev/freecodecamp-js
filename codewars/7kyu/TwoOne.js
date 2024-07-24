// https://www.codewars.com/kata/5656b6906de340bd1b0000ac


function longest(s1, s2) {
  let res = ''
  let abc = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < abc.length; i++){
    if(s1.includes(abc[i]) || s2.includes(abc[i])){
      res+=abc[i]
    }
  }
  return (res)
}