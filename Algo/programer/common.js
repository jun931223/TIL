var longestCommonPrefix = function (strs) {
  let collector = new Set();
  for (let i = 1; i < strs.length; i++) {
    if (strs[i - 1] === "") {
      return "";
    } else {
      for (let j = 0; j < strs[i].length; j++) {
        if (strs[0].includes(strs[i][j])) {
          collector.add(strs[i][j]);
          //        collector.clear(strs[i][j])
        }
      }
    }
  }
  return collector;
};
