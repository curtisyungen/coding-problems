// HACKERRANK
// hackerrank.com
// =====================================================================

// Problem: Picking Numbers
// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  let sets = [];
  for (var i in a) {
    sets[i] = [];
    for (var j in a) {
      if (a[j] === a[i] || a[j] === a[i] + 1) {
        sets[i].push(a[j]);
      }
    }
  }

  let maxLength = 0;
  for (var k in sets) {
    maxLength = Math.max(sets[k].length, maxLength);
  }

  return maxLength;
}

// Problem: Climbing the Leaderboard
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?h_r=next-challenge&h_v=zen

function climbLeaderboard(scores, alice) {
  let result = [];
  let lastIdx = 0;
  let lastRank = 0;

  alice.reverse();

  for (var a in alice) {
    for (var s in scores) {
    }
  }
}

// console.log(climbLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));

// Problem: The Hurdle Race
// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  let diff = Math.max(...height) - k;
  if (diff > 0) return diff;
  return 0;
}

// Problem: Designer PDF Viewer
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?h_r=next-challenge&h_v=zen

function designerPdfViewer(h, word) {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  if (word.length === 0) return 0;

  let maxHeight = 0;
  for (var c in word) {
    let idx = letters.indexOf(word[c]);
    maxHeight = Math.max(h[idx], maxHeight);
  }

  let area = maxHeight * word.length;

  return area;
}
