'use strict';
function solveEquation(a, b, c) {
  let D = (Math.pow(b,2)) - 4 * a * c;
  let x = [] ;
  if (D == 0) {
     x.push(-b / (2 * a));
  } else if (D > 0) {
     x.push(((-b + (Math.sqrt(D))) / (2 * a)));
     x.push(((-b - (Math.sqrt(D))) / (2 * a)));
  }
  return x;
}