function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        let addNum = numbers[i] + numbers[j];
        if (answer.indexOf(addNum) === -1) answer.push(addNum);
      }
    }
  }
  return answer.sort(function (a, b) {
    return a - b;
  });
}
