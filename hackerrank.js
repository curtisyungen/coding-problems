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

  let maxDist = 0;
  let dist = 0;
  for (var i = 0; i < n; i++) {
    dist += 1;
    if (c.indexOf(i) > -1) {
      maxDist = Math.max(dist, maxDist);
      dist = 0;
    }
  }

  maxDist = Math.max(dist, maxDist);

  let lastDist = 0;
  if (c.indexOf(i) === -1) {
    lastDist = i - Math.max(...c) - 1;
  }

  return Math.max(Math.floor(maxDist / 2), Math.min(...c), lastDist);
}

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
// Problem: Camel Case
// Easy

function camelcase(s) {
  let words = 1;
  for (var i in s) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      words += 1;
    }
  }

  return words;
}

// ============================================================================
// Problem: Kaprekar Numbers
// Easy

function kaprekarNumbers(p, q) {
  let nums = [];
  let kNum, num1, num2;
  for (var i = p; i <= q; i++) {
    if (i === 1) {
      nums.push(1);
    }

    kNum = Math.pow(i, 2).toString();
    num1 = parseInt(kNum.substring(0, kNum.length / 2));
    num2 = parseInt(kNum.substring(kNum.length / 2, kNum.length));

    if (num1 + num2 === i) {
      nums.push(i);
    }
  }

  if (nums.length === 0) {
    return "INVALID RANGE";
  }

  return nums;
}

// ============================================================================
// Problem: Strong Password
// Easy

function minimumNumber(n, password) {
  let hasNumber = false;
  let hasSpecial = false;
  let hasCapital = false;
  let hasLower = false;

  password = password.toString();

  let ch;
  for (var i in password) {
    ch = password.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      hasCapital = true;
    }

    if (ch >= 33 && ch <= 45) {
      hasSpecial = true;
    }

    if (ch >= 97 && ch <= 122) {
      hasLower = true;
    }

    if (ch >= 48 && ch <= 57) {
      hasNumber = true;
    }
  }

  let add = 0;
  if (!hasCapital) {
    add += 1;
  }
  if (!hasSpecial) {
    add += 1;
  }
  if (!hasLower) {
    add += 1;
  }
  if (!hasNumber) {
    add += 1;
  }

  if (password.length + add < 6) {
    add += 6 - (password.length + add);
  }

  return add;
}

// console.log(minimumNumber(1, "AUzs-nV"));

// ============================================================================
// Problem: Insertion Sort, Part 1
// Easy

function insertionSort1(n, arr) {
  let currIdx = n - 1;
  let num = arr[currIdx];
  let insert = false;

  while (currIdx >= 0 && !insert) {
    if (arr[currIdx - 1] < num) {
      arr[currIdx] = num;
      insert = true;
    } else if (currIdx === 0) {
      arr[currIdx] = num;
      insert = true;
    } else {
      arr[currIdx] = arr[currIdx - 1];
      currIdx -= 1;
    }

    console.log(...arr);
  }
}

// ============================================================================
// Problem: Two Characters
// Easy

function alternate(s) {
  let letSet = new Set(s);
  let letArr = Array.from(letSet);

  let maxStr = "";
  let maxLength = 0;

  for (var j = 0; j < letArr.length - 1; j++) {
    for (var k = j + 1; k < letArr.length; k++) {
      maxStr = "";
      for (var m = 0; m < s.length; m++) {
        if (s[m] === letArr[j] || s[m] === letArr[k]) {
          maxStr += s[m];
        }
      }
      if (validateString(maxStr)) {
        maxLength = Math.max(maxStr.length, maxLength);
      }
    }
  }

  return maxLength;
}

function validateString(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      return false;
    }
  }
  return true;
}

// console.log(alternate("beabeefeab"));

// ============================================================================
// Problem: Caesar Cypher
// Easy

function caesarCipher(s, k) {
  let newStr = "";
  let newCode = "";
  for (var i in s) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      newCode = s.charCodeAt(i) + (k % 26);

      if (newCode > 90) {
        newCode -= 26;
      }
      newStr += String.fromCharCode(newCode);
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      newCode = s.charCodeAt(i) + (k % 26);
      if (newCode > 122) {
        newCode -= 26;
      }
      newStr += String.fromCharCode(newCode);
    } else {
      newStr += s[i];
    }
  }

  return newStr;
}

// console.log(caesarCipher("middle-Outz", 2));

// ============================================================================
// Problem: Mars Exploration
// Easy
function marsExploration(s) {
  let diffs = 0;

  for (var j = 0; j < s.length; j += 3) {
    if (s[j] !== "S") {
      diffs += 1;
    }
    if (s[j + 1] !== "O") {
      diffs += 1;
    }
    if (s[j + 2] !== "S") {
      diffs += 1;
    }
  }

  return diffs;
}

// console.log(marsExploration("SOSSOS"));

// ============================================================================
// Problem: Hackerrank in a String
// Easy

function hackerrankInString(s) {
  let hackerrank = Array.from("hackerrank");
  let letter = 0;
  for (var i in s) {
    if (s[i] === hackerrank[letter]) {
      letter += 1;
    }
  }

  if (letter === 10) {
    return "YES";
  }

  return "NO";
}

// ============================================================================
// Problem: Pangrams
// Easy

function pangrams(s) {
  let letters = new Set();
  for (var i in s) {
    if (s[i] !== " ") {
      letters.add(s[i].toLowerCase());
    }
  }

  if (letters.size === 26) {
    return "pangram";
  }

  return "not pangram";
}

// ============================================================================
// Problem: Between Two Sets
// Easy

function getTotalX(a, b) {
  let lcmA = a[0];
  let gcdB = b[0];

  for (var i = 0; i < a.length; i++) {
    lcmA = lcm(lcmA, a[i]);
  }

  for (var j = 0; j < b.length; j++) {
    gcdB = gcd(gcdB, b[j]);
  }

  let count = 0;
  let m = 1;
  let n = 0;

  while (n < gcdB) {
    n = lcmA * m;

    if (gcdB % n === 0) {
      count += 1;
    }

    m += 1;
  }

  return count;
}

function lcm(x, y) {
  let large = Math.max(x, y);
  let small = Math.min(x, y);

  let i = large;
  while (i % small !== 0) {
    i += large;
  }

  return i;
}

function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// console.log(getTotalX([2, 4], [16, 32, 96]));

// ============================================================================
// Problem: Arrays, Left Rotation
// Easy

function rotLeft(a, d) {
  let idx;
  let newArr = [];
  for (var i = 0; i < a.length; i++) {
    idx = (i + (a.length - d)) % a.length;
    newArr[idx] = a[i];
  }

  return newArr;
}

// ============================================================================
// Problem: Funny Strings
// Easy

function funnyString(s) {
  let rev = "";
  for (var i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  for (var j = 1; j < s.length; j++) {
    if (
      Math.abs(s.charCodeAt(j) - s.charCodeAt(j - 1)) !==
      Math.abs(rev.charCodeAt(j) - rev.charCodeAt(j - 1))
    ) {
      return "Not Funny";
    }
  }

  return "Funny";
}

// ============================================================================
// Problem: Separate Numbers
// Easy

function separateNumbers(s) {
  if (!s || s.length === 1 || s[0] === "0") {
    console.log("NO");
    return;
  }

  // Get starting number with possible of 1-16 digits
  // Add one to starting number

  let match = false;
  let start = s[0];
  let str = start;
  let next;
  let digits = 1;
  let firstNum = 0;

  while (!match && digits <= s.length / 2) {
    firstNum = start;
    while (str.length <= s.length) {
      next = (BigInt(start) + 1n).toString();
      str += next;
      start = next;
    }

    if (str !== s) {
      digits += 1;
      start = s.substring(0, digits);
      str = start;
    } else {
      match = true;
      console.log("YES", firstNum);
      return;
    }
  }

  console.log("NO", firstNum, next);
  return;
}

// ============================================================================
// Problem: Weighted Uniform Strings
// Easy

function weightedUniformStrings(s, queries) {
  let substrings = {};
  let str = s[0];
  for (var i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      str += s[i];
    } else {
      substrings[str] = getWeight(str);
      str = s[i];
    }
  }

  let results = [];
  let found = false;
  for (var j = 0; j < queries.length; j++) {
    found = false;
    for (var k in substrings) {
      if (substrings[k][1] >= queries[j]) {
        if (queries[j] % substrings[k][0] === 0) {
          results.push("Yes");
          found = true;
          break;
        }
      }
    }
    if (!found) {
      results.push("No");
    }
  }

  return results;
}

function getWeight(str) {
  let wt = 0;
  let indWt = 0;
  for (var i in str) {
    indWt = str.charCodeAt(i) - 96;
    wt += indWt;
  }

  return [indWt, wt];
}

// console.log(weightedUniformStrings("aaabbbbcccddd", [9, 7, 8, 12, 5]));

// ============================================================================
// Problem: Gemstones
// Easy

function gemstones(arr) {
  let gems = [];

  // Get letters in first string
  for (var i = 0; i < arr[0].length; i++) {
    if (gems.indexOf(arr[0][i]) === -1) {
      gems.push(arr[0][i]);
    }
  }

  // Check subsequent strings for these letters
  // If not found, remove letter from gems array
  let newArr;
  for (var j = 1; j < arr.length; j++) {
    newArr = Array.from(arr[j]);
    for (var k = 0; k < gems.length; k++) {
      if (newArr.indexOf(gems[k]) === -1) {
        gems.splice(k, 1);
        k -= 1;
      }
    }
  }

  console.log(gems.length);
}

// ============================================================================
// Problem: Alternating Characters
// Easy

function alternatingCharacters(s) {
  // If next char is not equal to curr char, push into new array
  // Compare lengths of arrays to determine deletions

  if (s.length === 1) {
    return 0;
  }

  let sArr = Array.from(s);
  let char = sArr[0];
  let newArr = [char];

  for (var i = 1; i < sArr.length; i++) {
    if (s[i] !== char) {
      newArr.push(s[i]);
      char = s[i];
    }
  }

  return sArr.length - newArr.length;
}

// ============================================================================
// Problem: Beautiful Binary String
// Easy

function beautifulBinaryString(b) {
  // Change last digit in any 010 combination

  let bArr = Array.from(b);
  let count = 0;

  if (bArr.length < 3) {
    return 0;
  }

  for (var i = 2; i < bArr.length; i++) {
    if (bArr[i - 2] === "0" && bArr[i - 1] === "1" && bArr[i] === "0") {
      bArr[i] = 1;
      count += 1;
    }
  }

  return count;
}

// ============================================================================
// Problem: The Love Letter Mystery
// Easy

function theLoveLetterMystery(s) {
  let sArr = Array.from(s);
  let sRev = new Array(...s).reverse();

  // Check if already palindrome
  let count = 0;
  for (var i in sArr) {
    if (sArr[i] === sRev[i]) {
      count += 1;
    }
  }

  if (count === sArr.length) {
    return 0;
  }

  // Loop from start and from end
  // Sum up diffs between each letter's char code
  // Stop at middle index

  let midIdx = s.length % 2 === 0 ? s.length / 2 - 1 : Math.floor(s.length / 2);

  let ops = 0;
  let k = s.length - 1;
  for (var j = 0; j <= midIdx; j++) {
    ops += Math.abs(s.charCodeAt(j) - s.charCodeAt(k));
    k -= 1;
  }

  return ops;
}

// ============================================================================
// Problem: Closest Numbers
// Easy

function closestNumbers(arr) {
  // Sort the array
  arr.sort(compare);

  // Loop through array and take diff of adjacent numbers
  // Keep track of lowest diff
  // Keep track of values in array
  // Update diff and array if new lowest

  let minDiff = Math.abs(arr[1] - arr[0]);
  let minNums = new Set();
  minNums.add(arr[0]).add(arr[1]);

  let currDiff;

  for (var i = 2; i < arr.length; i++) {
    currDiff = Math.abs(arr[i] - arr[i - 1]);

    if (currDiff < minDiff) {
      minDiff = currDiff;
      minNums = new Set();
      minNums.add(arr[i - 1]).add(arr[i]);
    } else if (currDiff === minDiff) {
      minNums.add(arr[i - 1]).add(arr[i]);
    }
  }

  return Array.from(minNums);
}

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
}

// ============================================================================
// Problem: Anagrams
// Easy

function anagram(s) {
  if (s.length % 2 !== 0) {
    return -1;
  }

  // Get substrings
  let str1 = s.substring(0, s.length / 2);
  let str2 = s.substring(s.length / 2, s.length);

  let arr1 = Array.from(str1);
  let arr2 = Array.from(str2);

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
      arr1.splice(i, 1);
      i -= 1;
    }
  }

  return Math.abs(arr2.length);
}

// ============================================================================
// Problem: Palindrome Index
// Easy

function palindromeIndex(s) {
  let sArr = Array.from(s);
  let j = sArr.length - 1;
  let remIdx = -1;
  for (var i = 0; i < sArr.length; i++) {
    if (sArr[i] !== sArr[j]) {
      sArr.splice(i, 1);
      if (checkPalindrome(sArr)) {
        return i;
      }
      return j;
    }
    j -= 1;
  }

  return remIdx;
}

function checkPalindrome(s) {
  let sArr = Array.from(s);
  let sRev = new Array(...sArr).reverse();

  for (var i = 0; i < sArr.length; i++) {
    if (sArr[i] !== sRev[i]) {
      return false;
    }
  }

  return true;
}

// ============================================================================
// Problem: Game of Thrones 1
// Easy

function gameOfThrones(s) {
  let letters = {};
  for (var i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 1;
    } else {
      letters[s[i]] += 1;
    }
  }

  let numOdd = 0;
  Object.keys(letters).map(ch => {
    if (letters[ch] % 2 !== 0) {
      numOdd += 1;
    }
  });

  if (numOdd > 1) {
    return "NO";
  }

  return "YES";
}

// ============================================================================
// Problem: Ice Cream Parlor
// Easy

function icecreamParlor(m, arr) {
  let diff = 0;
  let newArr;
  for (var i = 0; i < arr.length; i++) {
    newArr = new Array(...arr);

    diff = m - newArr[i];
    newArr.splice(i, 1);
    if (newArr.indexOf(diff) !== -1) {
      return [i + 1, newArr.indexOf(diff) + 2];
    }
  }
}

// ============================================================================
// Problem: Missing Numbers
// Easy

function missingNumbers(arr, brr) {
  // Sum up occurrence of each number in both arrays
  let arrLets = getLetters(arr);
  let brrLets = getLetters(brr);

  // Compare both objects and identify differences
  // Look at both keys and values
  let diffs = [];
  Object.keys(brrLets).map(key => {
    if (!arrLets[key]) {
      diffs.push(key);
    } else if (arrLets[key] !== brrLets[key]) {
      diffs.push(key);
    }
  });

  diffs.sort(compare);

  return diffs;
}

function getLetters(arr) {
  let obj = {};
  for (var i in arr) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  return obj;
}

function compare(a, b) {
  aNum = parseInt(a);
  bNum = parseInt(b);
  if (aNum === bNum) {
    return 0;
  }
  return aNum > bNum ? 1 : -1;
}

// ============================================================================
// Problem: Sherlock and Array
// Easy

function balancedSums(arr) {
  // Have two pointers - one at beginning, one at end of array
  // Sum from beginning and end of array
  // Increment the smaller sum each time
  // If sums are equal, increment both
  // Stop when indicies are the same

  // If there is only one non-zero number, return yes
  let nonZero = 0;
  for (var i in arr) {
    if (arr[i] > 0) {
      nonZero += 1;
    }
  }

  if (nonZero === 1) {
    return "YES";
  }

  let startIdx = 1;
  let endIdx = arr.length - 2;

  let startSum = arr[0];
  let endSum = arr[arr.length - 1];

  while (startIdx <= endIdx - 1) {
    if (startSum === endSum) {
      startSum += arr[startIdx];
      endSum += arr[endIdx];
      startIdx += 1;
      endIdx -= 1;
    } else if (startSum > endSum) {
      endSum += arr[endIdx];
      endIdx -= 1;
    } else if (startSum < endSum) {
      startSum += arr[startIdx];
      startIdx += 1;
    }
  }

  return startSum === endSum ? "YES" : "NO";
}

// ============================================================================
// Problem: Print the Elements of a Linked List
// Easy

function printLinkedList(head) {
  if (!head) {
    return;
  }

  while (head.next) {
    console.log(head.data);
    head = head.next;
  }

  console.log(head.data);
}

// ============================================================================
// Problem: Insert a Node at Head of Linked List
// Easy

function insertNodeAtHead(head, data) {
  let newHead = new SinglyLinkedListNode();
  newHead.data = data;
  newHead.next = head;
  return newHead;
}

// ============================================================================
// Problem: Insert Node At Specific Position in Linked List
// Easy

function insertNodeAtPosition(head, data, position) {
  if (!head) {
    head = new SinglyLinkedListNode();
    head.data = data;
  } else {
    let idx = 0;
    let currNode = head;
    while (idx < position - 1) {
      currNode = currNode.next;
      idx += 1;
    }
    let currNext = currNode.next;
    let newNode = new SinglyLinkedListNode();
    newNode.data = data;
    newNode.next = currNext;
    currNode.next = newNode;
  }
  return head;
}

// ============================================================================
// Problem: Delete a Node in a Linked List
// Easy

function deleteNode(head, position) {
  if (!head || !head.next) {
    return;
  }

  if (position === 0) {
    head = head.next;
    return head;
  }

  let idx = 0;
  let currNode = head;
  while (idx < position - 1) {
    currNode = currNode.next;
    idx += 1;
  }
  currNode.next = currNode.next.next;
  return head;
}

// ============================================================================
// Problem: Print in Reverse
// Easy

function reversePrint(head) {
  if (!head || !head.next) {
    return;
  }

  let prev;
  let next;
  let currNode = head;
  while (currNode) {
    next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }

  currNode = prev;
  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

// ============================================================================
// Problem: Reverse a Linked List Recursively
// Easy

function reverse(node) {
  if (!node || !node.next) {
    return node;
  }

  let head = reverse(node.next);
  node.next.next = node;
  node.next = null;

  return head;
}

// ============================================================================
// Problem: Array Manipulation
// Hard

function arrayManipulation(n, queries) {
  let arr = new Array();
  for (var i = 0; i <= n + 1; i++) {
    arr[i] = 0;
  }

  let startIdx, endIdx, value;
  for (var j = 0; j < queries.length; j++) {
    startIdx = queries[j][0];
    endIdx = queries[j][1];
    value = queries[j][2];
    arr[startIdx] += value;
    arr[endIdx + 1] -= value;
  }

  let max = 0;
  let sum = 0;
  for (var k = 0; k < arr.length; k++) {
    sum += arr[k];
    max = Math.max(max, sum);
  }

  return max;
}

// ============================================================================
// Problem: Insert Node at the Tail of Linked List
// Easy

function insertNodeAtTail(head, data) {
  let node = new SinglyLinkedListNode();
  node.data = data;
  node.next = null;

  if (!head) {
    return node;
  }

  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = node;

  return head;
}

// ============================================================================
// Problem: Compare Two Linked Lists
// Easy

function CompareLists(llist1, llist2) {
  let curr1 = llist1;
  let curr2 = llist2;

  if (!curr1 && !curr2) {
    return 1;
  } else if (!curr1 || !curr2) {
    return 0;
  }

  while (curr1 && curr2) {
    if (curr1.data !== curr2.data) {
      return 0;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  if (curr1 === curr2) {
    return 1;
  }
  return 0;
}

// ============================================================================
// Problem: Merge Two Sorted Linked Lists
// Easy

function mergeLists(head1, head2) {
  if (!head1 && !head2) {
    return null;
  } else if (!head1) {
    return head2;
  } else if (!head2) {
    return head1;
  }

  let result;

  if (head1.data <= head2.data) {
    result = head1;
    result.next = mergeLists(head1.next, head2);
  } else {
    result = head2;
    result.next = mergeLists(head1, head2.next);
  }

  return result;
}

// ============================================================================
// Problem: Get Node Value
// Easy

function getNode(head, positionFromTail) {
  let curr = head;
  let res = head;
  let currIdx = 0;

  while (curr) {
    curr = curr.next;
    currIdx += 1;
    if (currIdx - 1 > positionFromTail) {
      res = res.next;
    }
  }

  return res.data;
}

// ============================================================================
// Problem: Delete Duplicate-Value Nodes from List
// Easy

function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = new SinglyLinkedListNode();
  let curr = head;

  while (curr) {
    prev.next = null;
    if (curr.data !== prev.data) {
      prev.next = curr;
      prev = curr;
    }
    curr = curr.next;
  }

  return head;
}

// ============================================================================
// Problem: 2D Array
// Easy

function hourglassSum(arr) {
  let max = -999;
  let sum;
  let top;
  let mid;
  let bot;

  for (var i = 0; i <= 3; i++) {
    for (var j = 0; j <= 3; j++) {
      top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      mid = arr[i + 1][j + 1];
      bot = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      sum = top + mid + bot;
      max = Math.max(max, sum);
    }
  }

  return max;
}

// ============================================================================
// Problem: Dynamic Array
// Easy

function dynamicArray(n, queries) {
  let seqList = [];

  for (var i = 0; i < n; i++) {
    seqList.push([]);
  }

  let lastAnswer = 0;
  let seqAtIdx;
  let size;
  let query;
  let answers = [];

  for (var j = 0; j < queries.length; j++) {
    seqAtIdx = (queries[j][1] ^ lastAnswer) % n;
    size = seqList[seqAtIdx].length;

    query = queries[j][0];
    if (query === 1) {
      seqList[seqAtIdx].push(queries[j][2]);
    } else if (query === 2) {
      lastAnswer = seqList[seqAtIdx][queries[j][2] % size];
      answers.push(lastAnswer);
    }
  }

  return answers;
}

// ============================================================================
