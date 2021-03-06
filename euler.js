// PROJECT EULER
// projecteuler.net
// =====================================================================

// Find the sum of all the multiples of 3 or 5 below 1000.
function problem1() {
  let sum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

// Find the sum of the even-valued terms in a Fibonacci sequence whose values do not exceed four million.
function problem2() {
  let sum = 2;

  let fibo = [1, 2, 3];
  let value = 3;
  let count = 0;

  while (value < 4000000) {
    value = fibo[count + 1] + fibo[count + 2];
    fibo.push(value);
    count += 1;

    if (value % 2 === 0) {
      sum += value;
    }
  }

  console.log(sum);
}

// What is the largest prime factor of the number 600851475143?
function problem3() {
  let number = 600851475143;
}

// What is the largest palindromic number made from the product of two three-digit numbers?
function problem4() {
  let number = 0;

  // Find largest possible product
  let largestProduct = 998001; // 999 * 999

  // Find next largest palindrome

  // Find its largest three-digit factor

  // Check if second factor is three digits

  console.log(number);
}

problem4();
