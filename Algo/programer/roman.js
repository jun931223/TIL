let romanToInt = function (s) {
  let romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let makeArr = s.split(""); //[I,I,I]
  let changeNum = makeArr.map((el) => romanNum[el]); //[1,1,1]
  return changeNum.reduce((pre, cur) => {
    if (pre === 1 && cur !== 1) {
      return cur - pre;
    } else {
      return pre + cur;
    }
  });
};
