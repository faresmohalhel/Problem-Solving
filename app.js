function fibonacciSequence(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

function arraySum(array) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + arraySum(array.slice(1));
}

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
