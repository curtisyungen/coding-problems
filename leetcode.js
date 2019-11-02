// LEETCODE
// leetcode.com
// =====================================================================

// Problem 6: Zig Zag Conversion
// https://leetcode.com/problems/zigzag-conversion/
// Sample Input: convert('PAYPALISHIRING', 3);

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

  let finalStr = '';
  for (var i in rows) {
    for (var j in rows[i]) {
      finalStr += rows[i][j];
    }
  }

  console.log(finalStr);
}
