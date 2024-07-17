// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/javascript

const permuteAPalindrome = input =>
  [...input].sort().join('').replace(/(.)\1/g, '').length < 2