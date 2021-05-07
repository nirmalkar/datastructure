function fact(num) {
  if (num === 1) return 1;
  return num * fact(num - 1);
}

const factVal = fact(4);
console.log(factVal);
