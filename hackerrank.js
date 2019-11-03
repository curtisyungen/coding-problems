// HACKERRANK
// hackerrank.com
// =====================================================================

// Problem: Picking Numbers
// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  // Write your code here

  let sets = [];
  for (var i = 0; i < a.length; i++) {
    sets[i] = [];
    for (var j = 0; j < a.length; j++) {
      if (i !== j && Math.abs(a[i] - a[j]) <= 1) {
        sets[i].push(a[j]);
      }
    }
  }

  return sets;
}

console.log(pickingNumbers(['1', '2', '3', '2', '1', '2']));
