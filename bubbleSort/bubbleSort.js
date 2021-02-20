const bubbleSort = (arr) => {
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        flag = false;
        let bigger = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = bigger;
      }
    }
  }
  return arr;
};
