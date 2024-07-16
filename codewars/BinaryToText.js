// https://www.codewars.com/kata/5583d268479559400d000064/javascript

const binaryToString = binary =>
  binary.replace(/.{8}/g, e => String.fromCharCode(parseInt(e,2)))