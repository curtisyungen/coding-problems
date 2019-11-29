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
  let ranks = [];
  for (var a in alice) {
    if (alice[a] > Math.max(...scores)) {
      ranks.push(1);
    } else if (alice[a] < Math.min(...scores)) {
      ranks.push(scores.length);
    } else {
      for (var s = 1; s <= scores.length; s++) {
        if (scores[s] <= alice[a] && scores[s - 1] > alice[a]) {
          ranks.push(s);
        }
      }
    }
  }

  return ranks;
}

console.log(climbLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));
