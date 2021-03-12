function solution(numbers) {
  var res = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        let addNum = numbers[i] + numbers[j];
        if (res.indexOf(addNum) === -1) res.push(addNum);
      }
    }
  }
  return res.sort(function (a, b) {
    return a - b;
  });
}
