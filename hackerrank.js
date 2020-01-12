// HACKERRANK
// hackerrank.com
// ============================================================================

// Problem: Picking Numbers
// Easy

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

// ============================================================================
// Problem: Climbing the Leaderboard
// Medium

function climbingLeaderboard(scores, alice) {
  let ranks = [];

  for (var a in alice) {
    if (alice[a] > scores[0]) {
      ranks.push(1);
    } else if (alice[a] < scores[scores.length - 1]) {
      ranks.push(scores.length - 1);
    } else {
    }
  }

  return ranks;
}

// console.log(
//   climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
// );

// ============================================================================
// Problem: The Hurdle Race
// Easy

function hurdleRace(k, height) {
  let diff = Math.max(...height) - k;
  if (diff > 0) return diff;
  return 0;
}

// ============================================================================
// Problem: Designer PDF Viewer
// Easy

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

// ============================================================================
// Problem: Utopian Tree
// Easy

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

// ============================================================================
// Problem: Angry Professor
// Easy

function angryProfessor(k, a) {
  let late = 0;
  for (var i in a) {
    if (a[i] > 0) {
      late += 1;
    }
  }

  return a.length - late >= k ? "NO" : "YES";
}

// ============================================================================
// Problem: Beautiful Days at the Movies
// Easy

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

// ============================================================================
// Problem: Viral Advertising
// Easy

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

// ============================================================================
// Problem: Save the Prisoner
// Easy

function saveThePrisoner(n, m, s) {
  if (Math.floor(m + s - 1) % n === 0) return n;
  return Math.floor((m + s - 1) % n);
}

// ============================================================================
// Problem: Circular Array Rotation
// Easy

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

// ============================================================================
// Problem: Sequence Equation
// Easy

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

// ============================================================================
// Problem: Jumping on the Clouds
// Easy

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

// ============================================================================
// Problem: Find Digits
// Easy

function findDigits(n) {
  let sum = 0;
  let num = n;
  let digit = 0;
  while (n > 0) {
    digit = n % 10;
    n = Math.floor(n / 10);

    if (num % digit === 0) {
      sum += 1;
    }
  }

  return sum;
}

// console.log(findDigits(1012));

// ============================================================================
// Problem: Append and Delete
// Easy

function appendAndDelete(s, t, k) {
  let commonLength = 0;
  for (var i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonLength += 1;
    } else {
      break;
    }
  }

  if (s.length + t.length - 2 * commonLength > k) {
    return "No";
  } else if ((s.length + t.length - 2 * commonLength) % 2 === k % 2) {
    return "Yes";
  } else if (s.length + t.length - k < 0) {
    return "Yes";
  } else {
    return "No";
  }
}

// console.log(appendAndDelete("aaaaaaaaaa", "aaaaa", 7));

// ============================================================================
// Problem: Sherlock and Squares
// Easy

function squares(a, b) {
  let sqrtA = Math.sqrt(a);
  let sqrtB = Math.sqrt(b);
  let count = Math.floor(sqrtB) - Math.ceil(sqrtA) + 1;

  return count > 0 ? count : 0;
}

// console.log(35, 70);

// ============================================================================
// Problem: Library Fine
// Easy

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 < y2) {
    return 0;
  } else if (y1 > y2) {
    return 10000 * Math.abs(y1 - y2);
  }

  if (m1 < m2) {
    return 0;
  } else if (m1 > m2) {
    return 500 * Math.abs(m2 - m1);
  }

  if (d1 > d2) {
    return 15 * Math.abs(d2 - d1);
  } else {
    return 0;
  }
}

// console.log(libraryFine(28, 2, 2015, 15, 4, 2015));

// ============================================================================
// Problem: Cut the Sticks
// Easy

function cutTheSticks(arr) {
  let sticks = [];
  while (arr.length > 0) {
    sticks.push(arr.length);
    let min = Math.min(...arr);
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] === min) {
        arr.splice(a, 1);
        a -= 1;
      } else {
        arr[a] -= min;
      }
    }
  }

  return sticks;
}

// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));

// ============================================================================
// Problem: Repeated String
// Medium

function repeatedString(s, n) {
  let numRepeats = Math.floor(n / s.length);

  let numAs = 0;
  for (var i in s) {
    if (s[i] === "a") {
      numAs += 1;
    }
  }

  let total = numAs * numRepeats;

  let remainder = n % s.length;
  for (var j = 0; j < remainder; j++) {
    if (s[j] === "a") {
      total += 1;
    }
  }

  return total;
}

// console.log(repeatedString("gfcaaaecbg", 547602));

// ============================================================================
// Problem: Jumping on the Clouds
// Easy

function jumpingOnClouds(c) {
  let idx = 0;
  let count = 0;
  while (idx < c.length - 1) {
    if (c[idx + 2] === 1) {
      idx += 1;
    } else {
      idx += 2;
    }
    count += 1;
  }

  return count;
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// ============================================================================
// Problem: Equalize the Array
// Easy

function equalizeArray(arr) {
  let vals = new Object();
  for (var i in arr) {
    if (vals[arr[i]]) {
      vals[arr[i]] += 1;
    } else {
      vals[arr[i]] = 1;
    }
  }

  let max = 0;
  for (var j in vals) {
    max = Math.max(max, vals[j]);
  }

  return arr.length - max;
}

// console.log(equalizeArray([3, 3, 2, 1, 3]));

// ============================================================================
// Problem: ACM ICPC Team
// Easy

function acmTeam(topic) {
  let idx = 0;
  let length;
  let maxLength = 0;
  let combos = 0;

  while (idx < topic.length - 1) {
    for (var i = idx + 1; i < topic.length; i++) {
      let firstStr = topic[idx];
      let secondStr = topic[i];

      length = 0;
      for (var j in firstStr) {
        if (firstStr[j] === "1" || secondStr[j] === "1") {
          length += 1;
        }

        if (length > maxLength) {
          maxLength = length;
          combos = 1;
        } else if (length === maxLength) {
          combos += 1;
        }
      }
    }
    idx += 1;
  }

  return [maxLength, combos];
}

// console.log(acmTeam(["10101", "11100", "11010", "00101"]));

// ============================================================================
// Problem: Taum and B'Day
// Easy

// const BigNumber = require("bignumber.js");

function taumBday(b, w, bc, wc, z) {
  [b, w, bc, wc, z] = [...arguments].map(x => new BigNumber(x));
  let tbc = BigNumber.min(b.times(bc), b.times(wc).plus(b.times(z)));
  let twc = BigNumber.min(w.times(wc), w.times(bc).plus(w.times(z)));
  return tbc.plus(twc).toFixed();
}

// ============================================================================
// Problem: Beautiful Triplets
// Easy

function beautifulTriplets(d, arr) {
  let count = 0;
  for (var a in arr) {
    let j = arr[a] + d;
    let k = arr[a] + 2 * d;

    if (arr.indexOf(j) !== -1 && arr.indexOf(k) !== -1) {
      count += 1;
    }
  }

  return count;
}

// ============================================================================
// Problem: Minimum Distances
// Easy

function minimumDistances(a) {
  let idx1 = new Object();
  let idx2 = new Object();
  for (var i = 0; i < a.length; i++) {
    if (idx1[a[i]] >= 0) {
      idx2[a[i]] = i;
    } else {
      idx1[a[i]] = i;
    }
  }

  let min = a.length;
  let dist = 0;
  for (var j in idx1) {
    if (idx2[j]) {
      dist = idx2[j] - idx1[j];
      min = Math.min(min, dist);
    }
  }

  return min !== a.length ? min : -1;
}

// console.log(minimumDistances([1, 1]));

// ============================================================================
// Problem: Halloween Sale
// Easy

function howManyGames(p, d, m, s) {
  let count = 0;

  while (s >= p) {
    count += 1;
    s -= p;
    p = Math.max(p - d, m);
  }

  return count;
}

// console.log(howManyGames(20, 3, 6, 85));

// ============================================================================
// Problem: Chocolate Feast
// Easy

function chocolateFeast(n, c, m) {
  let wrappers = Math.floor(n / c);
  let bars = wrappers;

  while (wrappers >= m) {
    wrappers -= m;
    bars += 1;
    wrappers += 1;
  }

  return bars;
}

// console.log(chocolateFeast(10, 2, 5));
// console.log(chocolateFeast(12, 4, 4));
// console.log(chocolateFeast(6, 2, 2));

// ============================================================================
// Problem: Service Lane
// Easy

function serviceLane(n, w, cases) {
  let maxes = [];
  for (var c in cases) {
    let i = cases[c][0];
    let j = cases[c][1];

    let max = 100000;

    for (var k = i; k < j + 1; k++) {
      max = Math.min(max, w[k]);
    }
    maxes.push(max);
  }

  return maxes;
}

// ============================================================================
// Problem: Lisa's Workbook
// Easy

function workbook(n, k, arr) {
  let pages = 0;
  let totalProbs = 0;
  let special = 0;

  for (var a in arr) {
    pages += 1;
    totalProbs = 0;
    for (var i = 0; i < arr[a]; i++) {
      totalProbs += 1;
      if (i % k === 0 && i > 0) {
        pages += 1;
      }

      if (totalProbs === pages) {
        special += 1;
      }
    }
  }

  return special;
}

// console.log(workbook(5, 3, [4, 2, 6, 1, 10]));

// ============================================================================
// Problem: Flatland Space Stations
// Easy

function flatlandSpaceStations(n, c) {
  if (n === c.length) {
    return 0;
  }

  c.sort(compare);

  let max = 0;
  let count = 0;

  for (var i = 1; i <= n; i++) {
    if (c.indexOf(i) !== -1) {
      max = Math.max(Math.floor(count / 2), max);
      count = 0;
    } else {
      count += 1;
    }
  }

  max = Math.max(max, n - c[c.length - 1] - 1);

  return max;
}

function compare(a, b) {
  if (a === b) {
    return 0;
  } else if (a > b) {
    return 1;
  } else {
    return -1;
  }
}

// console.log(flatlandSpaceStations(20, [13, 1, 11, 10, 6]));
// console.log(flatlandSpaceStations(100, [93, 41, 91, 61, 30, 6, 25, 90, 97]));

// ============================================================================
// Problem: Super Reduced String
// Easy

function superReducedString(s) {
  let arr = [];
  for (var i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
    }
  }

  if (arr.length === 0 || arr.length === 2) {
    return "Empty String";
  } else {
    return arr.join("");
  }
}

// console.log(
//   superReducedString(
//     "ppffccmmssnnhhbbmmggxxaaooeeqqeennffzzaaeeyyaaggggeessvvssggbbccnnrrjjxxuuzzbbjjrruuaaccaaoommkkkkxx"
//   )
// );

// ============================================================================
// Problem: Fair Rations
// Easy

function fairRations(B) {
  let lastId = -1;
  let count = 0;

  for (var i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      if (lastId === -1) {
        lastId = i;
      } else {
        count += Math.abs(i - lastId) * 2;
        lastId = -1;
      }
    }
  }

  return lastId !== -1 ? "NO" : count;
}

// console.log(fairRations([2, 3, 5, 5, 6, 7]));

// ============================================================================
// Problem: Cavity Map
// Easy

function cavityMap(grid) {
  for (var r = 1; r < grid.length - 1; r++) {
    for (var c = 1; c < grid[r].length - 1; c++) {
      let prevRow = grid[r - 1][c];
      let nextRow = grid[r + 1][c];
      let prevCol = grid[r][c - 1];
      let nextCol = grid[r][c + 1];
      let currVal = grid[r][c];

      if (
        currVal > prevRow &&
        currVal > nextRow &&
        currVal > prevCol &&
        currVal > nextCol
      ) {
        grid[r] = replaceAt(grid[r], c, "X");
      }
    }
  }

  return grid;
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

// console.log(cavityMap(["1112", "1912", "1892", "1234"]));

// ============================================================================
// Problem: Manasa and Stones
// Easy

function stones(n, a, b) {
  let sums, sum;

  for (var i = 0; i < n; i++) {
    sums = [];

    let firstSum = (n - 1) * Math.min(a, b);
    sums.push(firstSum);

    sum = 0;

    while (sum + firstSum < (n - 1) * Math.max(a, b)) {
      sum += Math.abs(b - a);
      sums.push(sum + firstSum);
    }

    return sums;
  }
}

// console.log(stones(3, 1, 2));
// console.log(stones(4, 10, 100));

// ============================================================================
// Problem: Happy Ladybugs
// Easy

function happyLadybugs(b) {
  let bugs = {};

  for (var i = 0; i < b.length; i++) {
    if (!bugs[b[i]]) {
      bugs[b[i]] = 1;
    } else {
      bugs[b[i]] += 1;
    }
  }

  // If there are no bugs
  if (Object.keys(bugs).length === 0) {
    return "YES";
  }

  // Check if there is one of any letter
  let noMatch = false;
  Object.keys(bugs).map(bug => {
    if (bugs[bug] === 1 && bug !== "_") {
      noMatch = true;
    }
  });

  if (noMatch) {
    return "NO";
  }

  // Check if there are no blanks
  let noBlanks = true;
  Object.keys(bugs).map(bug => {
    if (bug === "_") {
      noBlanks = false;
    }
  });

  // Check if string is happy
  let isHappy = true;
  for (var i = 0; i < b.length; i++) {
    if (b[i] !== b[i - 1]) {
      if (b[i] !== b[i + 1]) {
        isHappy = false;
      }
    }
  }

  if (noBlanks && !isHappy) {
    return "NO";
  }

  return "YES";
}

// console.log(happyLadybugs("RBY_YBR"));

// ============================================================================
// Problem: Strange Counter
// Easy

function strangeCounter(t) {
  let rem = 3;
  while (t > rem) {
    t = t - rem;
    rem *= 2;
  }

  return rem - t + 1;
}

// console.log(strangeCounter(4));

// ============================================================================
