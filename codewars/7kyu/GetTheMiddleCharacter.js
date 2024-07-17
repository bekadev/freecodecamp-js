// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  return s.length % 2 === 0
    ? s.slice(s.length/2-1, s.length/2+1)
    : s.slice(s.length/2-0.5, s.length/2+0.5)

}