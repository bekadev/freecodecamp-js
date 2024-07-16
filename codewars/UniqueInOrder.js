// https://www.codewars.com/kata/54e6533c92449cc251001667/javascript

const uniqueInOrder= iterable =>
  [...iterable].filter((element, index) => element != iterable[index + 1])