// https://www.codewars.com/kata/55b350026cc02ac1a7000032/train/javascript

const whitespaceNumber = n =>
  (n > 0 ?  ' ' : '') + n.toString(2).replace(/[-1]/g, '\t').replace(/0/g, ' ') + '\n'
