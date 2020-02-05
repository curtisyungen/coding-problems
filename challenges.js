// Problem: find most frequent char in string; if multiple, return earliest in alphabet
// Microsoft Skills Assessment, 1/29/2020

function solution1(S) {
  var occurrences = new Array(26);
  for (var i = 0; i < occurrences.length; i++) {
    occurrences[i] = 0;
  }

  for (var id in S) {
    occurrences[S.charCodeAt(id) - "a".charCodeAt(0)]++;
  }

  var best_char = "";
  var best_res = 0;

  for (var i = 0; i < 26; i++) {
    if (occurrences[i] > best_res) {
      best_char = String.fromCharCode("a".charCodeAt(0) + i);
      best_res = occurrences[i];
    }
  }

  return best_char;
}

//   console.log(solution1("haalloooooolllll"));

// ============================================================================
// Problem: find longest substring not containing 'aaa' or 'bbb'
// Microsoft Skills Assessment, 1/29/2020

function solution2(s) {
  if (s.indexOf("aaa") === -1 && s.indexOf("bbb") === -1) {
    return s.length;
  }

  let sub = "";
  let maxLength = 0;

  for (var i = 0; i < s.length; i++) {
    sub += s[i];

    if (sub.indexOf("aaa") > -1 || sub.indexOf("bbb") > -1) {
      maxLength = Math.max(sub.substring(0, sub.length - 1).length, maxLength);
      sub = s[i - 1];
      i -= 1;
    }
  }

  maxLength = Math.max(sub.length, maxLength);

  return maxLength;
}

//   console.log(solution2("bbbabbb"));

// ============================================================================
// Problem: find earliest substring in alphabet that can be obtained by removing one character
// Microsoft Skills Assessment, 1/29/2020

function solution3(s) {
  for (var i = 0; i < s.length; i++) {
    let currVal = s.charCodeAt(i);
    let prevVal = i - 1 >= 0 ? s.charCodeAt(i - 1) : -1;
    let nextVal = i + 1 < s.length ? s.charCodeAt(i + 1) : -1;

    if (currVal > prevVal && currVal >= nextVal) {
      return s.substring(0, i).concat(s.substring(i + 1, s.length));
    }
  }
}

// console.log(solution3("acb"));
// console.log(solution3("hot"));
// console.log(solution3("codility"));
// console.log(solution3("aaaa"));

// ============================================================================
// Problem: Merge Arrays
// Microsoft Interview, SE II, 1/31/2020

function merge(a, b) {
  let endB;
  for (var i = 0; i < b.length; i++) {
    if (b[i] === null) {
      endB = i - 1;
      break;
    }
  }

  let aIdx = a.length - 1;
  let bCount = 1;

  for (var j = endB; j >= 0; j--) {
    if (b[j] >= a[aIdx]) {
      b[b.length - bCount] = b[j];
      bCount += 1;
      b[j] = null;
    } else if (b[j] < a[aIdx]) {
      b[b.length - bCount] = a[aIdx];
      bCount += 1;
      aIdx -= 1;
      j += 1;
    }
  }

  if (aIdx > 0) {
    for (var k = aIdx; k >= 0; k--) {
      b[b.length - bCount] = a[k];
      bCount += 1;
    }
  }

  return b;
}

console.log(
  merge([4, 5, 6, 7, 8], [1, 2, 6, 8, 10, null, null, null, null, null])
);

// ============================================================================
// Problem: Fun with Anagrams
// Bungee Skills Test, Web Developer, 02/05/2020

function funWithAnagrams(text) {
  let result = [];

  if (text.length === 1) {
    return text;
  }

  let wordArr;
  let sortedWord;
  let words = [];

  for (var i = 0; i < text.length; i++) {
    wordArr = Array.from(text[i]);
    wordArr.sort(compare);

    sortedWord = "";

    for (var j = 0; j < wordArr.length; j++) {
      sortedWord += wordArr[j];
    }

    if (words.indexOf(sortedWord) === -1) {
      result.push(text[i]);
      words.push(sortedWord);
    }
  }

  // Sort the array, lowest to highest
  result.sort(compare);

  return result;
}

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
}

// ============================================================================
// Problem: Min Sum
// Bungee Skills Test, Web Developer, 02/05/2020

function minSum(num, k) {
  num.sort(compare);

  let sum = 0;

  if (k > 0) {
    num[0] = Math.ceil(num[0] / 2);
    sum = minSum(num, k - 1);
  } else {
    for (var i = 0; i < num.length; i++) {
      sum += num[i];
    }
  }

  return sum;
}

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? 1 : -1;
}

// console.log(minSum([10, 20, 7], 4));
// console.log(minSum([2, 2, 3], 1));
// console.log(minSum([2, 3, 1], 2));

// ============================================================================
