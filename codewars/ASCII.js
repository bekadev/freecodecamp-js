// https://www.codewars.com/kata/630006e1b4e54c7a7e943679/javascript

function sierpinskiCarpetString(n) {
  let array = ['██']
  for(let i = 0; i < n; i++){
    let solid = array.map(e => e.repeat(3)),
      space = array.map(e => e + ' '.repeat(e.length) + e)
    array = [...solid, ...space, ...solid]
  }
  return array.join('\n');
}