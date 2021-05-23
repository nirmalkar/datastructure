function isPalindrome(str) {
  const reversedStrArr = [];
  function helper(num) {
    if (num === 0) {
      reversedStrArr.push(str[num]);
      if (reversedStrArr.join("") === str) {
        return true;
      }
      return false;
    }
    reversedStrArr.push(str[num]);
    return helper(num - 1);
  }
  return helper(str.length - 1);
}

const checkOne = isPalindrome("awesome"); // false
const checkTwo = isPalindrome("foobar"); // false
const checkThree = isPalindrome("tacocat"); // true
const checkFour = isPalindrome("amanaplanacanalpanama"); // true
const checkFive = isPalindrome("amanaplanacanalpandemonium"); // false

console.log(checkOne, checkTwo, checkThree, checkFour, checkFive);
