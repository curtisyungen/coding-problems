// Problem: find most frequent char in string; if multiple, return earliest in alphabet

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
