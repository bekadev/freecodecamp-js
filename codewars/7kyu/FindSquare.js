// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript


function findNextSquare(sq) {
  if (Math.sqrt(sq).toString().includes('.')) {
    return -1;
  }

  return ((Math.sqrt(sq)+1) ** 2)
}