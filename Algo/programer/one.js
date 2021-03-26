/*
numbers라는 배열안의 넘버타입의 요소들을 모두 더해서 나온 값을 
새로운 배열에 넣어서 리턴하는 문제
[이때 리턴하는 값은 정렬이 되어있어야 한다.]
[리턴하는 배열의 요소에는 중복되는 요소가 있어서는 안된다.]

1. 반복문을 사용해 배열의 요소를 순회한다.
  1.1 반복문 안에 다시 한번 반복문으로 순회를 한다.
    1.1.1  순회하며 첫번째 순회하는 배열의 요소를 더하며 빈배열에 넣는다.
    1.1.1 조건 **  조건문 바깥 반복문과 안쪽 반복문의 초기값이 같으면 안된다.
    1.1.1 조건 **  배열안에 이미 값이 존재한다면 넣지 않는다. 존재하지 않는 값을 넣는다.
2. 1번의 과정을 통해 채워진 배열에 sort메서드를 사용해서 정렬한다.

*/

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
