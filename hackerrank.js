// HACKERRANK
// hackerrank.com
// =====================================================================

// Problem: Picking Numbers
// EASY

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
// EASY

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
// EASY

function hurdleRace(k, height) {
  let diff = Math.max(...height) - k;
  if (diff > 0) return diff;
  return 0;
}

// Problem: Designer PDF Viewer
// EASY

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

// Problem: Utopian Tree
// EASY

function utopianTree(n) {
  let h = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      h += 1;
    } else {
      h *= 2;
    }
  }
  return h;
}

// Problem: Angry Professor
// EASY

function angryProfessor(k, a) {
  let late = 0;
  for (var i in a) {
    if (a[i] > 0) {
      late += 1;
    }
  }

  return a.length - late >= k ? "NO" : "YES";
}

// Problem: Beautiful Days at the Movies
// EASY

function beautifulDays(i, j, k) {
  let newNum, orig;
  let count = 0;
  for (var s = i; s <= j; s++) {
    orig = s;
    newNum = 0;
    while (s >= 1) {
      newNum = newNum * 10 + Math.floor(s % 10);
      s = s / 10;
    }

    if (Number.isInteger(Math.abs(orig - newNum) / k)) {
      count += 1;
    }

    s = orig;
  }

  return count;
}

// console.log(beautifulDays(1, 2000000, 23047885));

// Problem: Viral Advertising
// EASY

function viralAdvertising(n) {
  let shared = 5;
  let liked = 0;
  let total = 0;

  for (var i = 0; i < n; i++) {
    liked = Math.floor(shared / 2);
    total += liked;
    shared = liked * 3;
  }

  return total;
}

// Problem: Save the Prisoner
// EASY

function saveThePrisoner(n, m, s) {
  if (Math.floor(m + s - 1) % n === 0) return n;
  return Math.floor((m + s - 1) % n);
}

// Problem: Circular Array Rotation
// EASY

function circularArrayRotation(a, k, queries) {
  let kAct = Math.floor(k % a.length);
  let idx;
  let answers = [];
  for (var q in queries) {
    idx = queries[q] - kAct;
    if (idx >= 0) {
      answers.push(a[idx]);
    } else {
      answers.push(a[idx + a.length]);
    }
  }

  return answers;
}

// console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));

// Problem: Sequence Equation
// EASY

function permutationEquation(p) {
  let yArr = [];
  let idx;

  for (var x = 1; x <= p.length; x++) {
    idx = p.indexOf(x) + 1;
    yArr.push(p.indexOf(idx) + 1);
  }

  return yArr;
}

// console.log(permutationEquation([2, 3, 1]));

// Problem: Jumping on the Clouds
// EASY

function jumpingOnClouds(c, k) {
  let idx = 0;
  let e = 100;
  do {
    if (c[idx] === 1) {
      e -= 3;
    } else {
      e -= 1;
    }

    if (idx + k > c.length - 1) {
      idx = idx + k - c.length;
    } else {
      idx += k;
    }
  } while (idx > 0);

  return e;
}

// console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));
