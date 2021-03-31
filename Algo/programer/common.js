// var longestCommonPrefix = function (strs) {
//   let collector = new Set();
//   for (let i = 1; i < strs.length; i++) {
//     if (strs[i - 1] === "") {
//       return "";
//     } else {
//       for (let j = 0; j < strs[i].length; j++) {
//         if (strs[0].includes(strs[i][j])) {
//           collector.add(strs[i][j]);
//           //        collector.clear(strs[i][j])
//         }
//       }
//     }
//   }
//   return collector;
// };

let strs = ["flower", "flow", "flight"];
const longestCommonPrefix = function (strs) {
  return strs.reduce((pre, cur) => {
    let res = "";
    for (let i = 0; i < cur.length; i++) {
      console.log(cur[i]);
      if (pre.includes(cur[i])) {
        res = res + cur[i];
      }
    }
    return res;
  });
  // let res = [];

  // for (let i = 1; i < strs.length; i++) {

  //   for (let j = 0; j < strs[i].length; j++) {
  //     if (strs[0].includes(strs[i][j])) {
  //       res.push(strs[i][j]);
  //     }
  //   }
  // }
  // console.log(res);
};
longestCommonPrefix(strs);
