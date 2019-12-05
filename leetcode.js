// LEETCODE
// leetcode.com
// ============================================================================

// Problem 6: Zig Zag Conversion
// Medium

function convert(s, numRows) {
  // Loop through each character
  // When counter reaches numRows or 0, change sign
  // Push each letter into an array holding this row

  if (s.length < 3 || numRows === 1) {
    return s;
  }

  let rows = [];
  for (var r = 0; r <= numRows; r++) {
    rows.push([]);
  }

  let sign = 1;
  let targetRow = 0;

  for (var ch in s) {
    rows[targetRow].push(s[ch]);
    targetRow += sign;

    if (targetRow === numRows - 1) {
      sign = -1;
    } else if (targetRow === 0) {
      sign = 1;
    }
  }

  let finalStr = "";
  for (var i in rows) {
    for (var j in rows[i]) {
      finalStr += rows[i][j];
    }
  }

  console.log(finalStr);
}

// ============================================================================
// Problem 9: Palindrome Number
// Easy

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let newNum = new Array();
  while (x > 0) {
    newNum.push(x % 10);
    x = Math.floor(x / 10);
  }

  let newArr = new Array();
  for (var i = newNum.length - 1; i >= 0; i--) {
    newArr.push(newNum[i]);
  }

  for (var j in newNum) {
    if (newNum[j] !== newArr[j]) {
      return false;
    }
  }

  return true;
};

// ============================================================================
// Problem 11: Container With Most Water
// Medium

var maxArea = function(height) {
  let maxArea = 0;
  let leftIdx = 0;
  let rightIdx = height.length - 1;

  while (leftIdx < rightIdx) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[leftIdx], height[rightIdx]) * (rightIdx - leftIdx)
    );

    if (height[leftIdx] < height[rightIdx]) {
      leftIdx += 1;
    } else {
      rightIdx -= 1;
    }
  }

  return maxArea;
};

// ============================================================================
// Problem 12: Integer to Roman
// Medium

var intToRoman = function(num) {
  let numeral = "";

  let thousands = Math.floor(num / 1000);
  for (var i = 0; i < thousands; i++) {
    numeral += "M";
  }

  num -= thousands * 1000;

  let hundreds = Math.floor(num / 100);
  if (hundreds === 4) {
    numeral += "CD";
  } else if (hundreds === 9) {
    numeral += "CM";
  } else {
    let tempHundreds = hundreds;
    if (hundreds >= 5) {
      numeral += "D";
      tempHundreds -= 5;
    }
    for (var k = 0; k < tempHundreds; k++) {
      numeral += "C";
    }
  }

  num -= hundreds * 100;

  let tens = Math.floor(num / 10);
  if (tens === 4) {
    numeral += "XL";
  } else if (tens === 9) {
    numeral += "XC";
  } else {
    let tempTens = tens;
    if (tens >= 5) {
      numeral += "L";
      tempTens -= 5;
    }
    for (var m = 0; m < tempTens; m++) {
      numeral += "X";
    }
  }

  num -= tens * 10;

  let ones = Math.floor(num / 1);
  if (ones === 4) {
    numeral += "IV";
  } else if (ones === 9) {
    numeral += "IX";
  } else {
    if (ones >= 5) {
      numeral += "V";
      ones -= 5;
    }
    for (var p = 0; p < ones; p++) {
      numeral += "I";
    }
  }

  return numeral;
};

// ============================================================================
// Problem 13: Roman to Integer
// Easy

var romanToInt = function(s) {
  let romans = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M"
  ];
  let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let number = 0;

  if (romans.indexOf(s) !== -1) {
    return nums[romans.indexOf(s)];
  }

  for (var i = 0; i < s.length; i++) {
    if (romans.indexOf(s[i] + s[i + 1]) !== -1) {
      number += nums[romans.indexOf(s[i] + s[i + 1])];
      i += 1;
    } else {
      number += nums[romans.indexOf(s[i])];
    }
  }

  return number;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("CIV"));
// console.log(romanToInt("XC"));

// ============================================================================
// Problem 14: Longest Common Prefix
// Easy

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (var i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// ============================================================================
// Problem 20: Valid Parentheses
// Easy

var isValid = function(s) {
  if (s === null || s.length === 0) {
    return true;
  }

  if (s.length === 1) {
    return false;
  }

  let stack = [];

  for (var i in s) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};

// console.log(isValid("()"));

// ============================================================================
