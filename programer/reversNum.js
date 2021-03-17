var reverse = function (x) {
  let cnt;
  if (x < 0) {
    cnt = 0;
  } else {
    cnt = -1;
  }
  let strNum = x + "";
  let res = "";
  for (let i = strNum.length - 1; i > cnt; i--) {
    res = res + strNum[i];
  }
  if (x < 0) {
    let putMinus = "-" + res;
    if (
      Number(putMinus) < -Math.pow(2, 31) ||
      Number(res) > Math.pow(2, 31) - 1
    ) {
      return 0;
    }
    return Number(putMinus);
  } else {
    return Number(res);
  }
};
