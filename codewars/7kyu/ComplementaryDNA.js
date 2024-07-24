// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const pairs = {"A":"T","T":"A","C":"G","G":"C",}

function dnaStrand(dna){
  return dna.split('').map(function(v){return pairs[v]}).join('')
}