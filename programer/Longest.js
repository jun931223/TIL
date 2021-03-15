function lengthOfLongestSubstring(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let makeArr = [str[i]];
    for (let j = 0; j < str.length; j++) {
      if (i !== j && makeArr.indexOf(str[j]) === -1) {
        makeArr.push(str[j]);
      } else if (str[i] !== str[j]) {
        res.push(makeArr);
        continue;
      }
    }
  }
  console.log(res);
  let longest = res.reduce((pre, cur) => {
    if (pre.length < cur.length) {
      return cur;
    } else {
      return pre;
    }
  });
  return longest.length;
}
