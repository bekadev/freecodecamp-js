// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array)
{
  let codes = array.map(e => e.charCodeAt())
  for (let i = 0; i < codes.length; i++){
    if (codes[i] + 1 != codes[i + 1]){
      return String.fromCharCode(codes[i] + 1);
    }
  }
}