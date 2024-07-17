// https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/javascript


const encode = (text) =>
  [...text].map(e => [...e.charCodeAt().toString(2).padStart(8, '0')]
    .map(el => el.repeat(3)).join('')).join('')


const decode = (bits) =>
  bits.match(/.{3}/g)
    .reduce((p,c) => p + [...c].sort()[1],'')
    .match(/.{8}/g)
    .map(e => String.fromCharCode(parseInt(e, 2)))
    .join('')