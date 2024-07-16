// https://www.codewars.com/kata/583d10c03f02f41462000137/train/javascript

const maxSum = (arr,range) =>
  Math.max(...range.map(element => arr.slice(element[0], element[1] + 1)
    .reduce((prev, curr) => prev + curr)))