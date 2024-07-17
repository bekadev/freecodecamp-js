// https://www.codewars.com/kata/584703d76f6cf6ffc6000275/javascript

const estSubsets = arr =>
  2 ** new Set(arr).size - 1