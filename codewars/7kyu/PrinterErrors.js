// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript


function printerError(s) {
  let abc = 'abcdefghijklm'
  let ok = 0
  let error = 0

  for ( let i = 0; i < s.length; i++){
    if(abc.includes(s[i])){
      ok++
    } else {
      error++
    }
  }

  return error + '/' + (ok + error)
}