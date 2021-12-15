function reverse(str) {
  const reversedStr = [];
  function helper(num) {
    console.log(num);
    if (num === 0) {
      reversedStr.push(str[num]);
      return reversedStr.join("");
    }
    reversedStr.push(str[num]);
    returnhelper(num - 1);
  }
  return helper(str.length);
}

const rsOne = reverse("awesome"); // 'emosewa'
const rsTwo = reverse("rithmschool"); // 'loohcsmhtir'
console.log(rsOne, rsTwo);
