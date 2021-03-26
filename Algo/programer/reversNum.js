var reverse = function (x) {
  let maxOrMin = Math.pow(2, 31);
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
    if (Number(putMinus) < -maxOrMin) {
      return 0;
    }
    return Number(putMinus);
  } else if (Number(res) > maxOrMin - 1) {
    return 0;
  } else {
    return Number(res);
  }
};
