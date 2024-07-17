// https://www.codewars.com/kata/52b305bec65ea40fe90007a7/javascript

const grabscrab = (anagram, dictionary) =>
  dictionary.filter(e => [...e].sort().join('') == [...anagram].sort().join(''))