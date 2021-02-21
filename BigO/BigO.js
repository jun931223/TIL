// O(1) 배열의 마지막 인덱스의 요소를 추가 또는 삭제할 경우
let arr = [1, 2, 3];
arr.pop();
arr.push(3);

// O(N) 배열의 모든 요소를 순회할 때
let arr = [1, 2, 3];
for (let i = 0; arr.length; i++) {
  console.log(arr[i]);
}

// O(logN) 이진검색을 할 때
const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

// O(N^2) 이중 반복문을 적용할 때 [배열에서 반복되는 요소가 있는지 탐색]
let arr = ["Tate", "Eric", "Silvia", "Tate"];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    i !== j && arr[i] === arr[j] ? console.log(arr[i], i) : "";
  }
}
