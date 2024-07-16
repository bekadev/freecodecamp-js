https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript

const alphabetPosition = text =>
  [...text.replace(/[^a-z]/gi,'').toLowerCase()].map(e => e.charCodeAt() - 96).join(' ')


