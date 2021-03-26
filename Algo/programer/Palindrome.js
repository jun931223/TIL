/*
x의 값으로 넘버타입이 주어진다.
주어진 넘버타입과 넘버타입을 리버스 한 값이 동일한지 동일하지 않은지 체크하는 문제

1. 넘버타입을 스트링으로 만든다.
2. 스트링을 배열로 바꾼다.
3. 바꾼 배열을 리버스 함수를 사용해 엘리먼트를 반전시킨다.
4. 반전시킨 배열을 조인 메서드를 사용해 스트링으로 변환한다.
5. 2번의 스트링과 4번의 스트링을 대조한다.
  5.1 만약 같다면 참
  5.2 만약 다르다면 거짓
*/
var isPalindrome = function (x) {
  let str = x + "";
  let arr = str.split("");
  let reversedArr = arr.reverse();
  let compared = reversedArr.join("");
  if (str === compared) {
    return true;
  } else {
    return false;
  }
};
