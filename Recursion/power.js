function power(base, exp) {
  function helper(base, exp) {
    if (base === 0) return 0;
    if (exp === 0) return 1;
    if (exp === 1) return base;

    return base * helper(base, exp - 1);
  }
  return helper(base, exp);
}

console.log(power(3, 2));
