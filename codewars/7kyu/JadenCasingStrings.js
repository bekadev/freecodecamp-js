// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  let res = this[0].toUpperCase()

  for (let i = 1; i < this.length; i++){
    res += this[i]

    if(this[i] === ' '){
      res += this[i+1].toUpperCase()
      i++
    }
  }
  return res
};