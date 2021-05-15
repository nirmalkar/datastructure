function calculateFactorial(num) {
  function helper(num) {
    if (num === 1) return 1;
    return num * helper(num - 1);
  }

  return helper(num);
}

const factVal = calculateFactorial(4);
console.log(factVal);
