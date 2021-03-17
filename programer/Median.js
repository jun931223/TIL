var findMedianSortedArrays = function (nums1, nums2) {
  /*
     1. 두 배열을 정렬시켜 넣는다.
     2. 배열을 순회하여 가운데의 수를 찾는다.
       2.1 요소 개수가 홀수일 때, 가운데 인덱스의 수를 출력
       2.2 요소 개수가 짝수일 때, 인덱스 /2 반올림한 인덱스값과 그 값의 +1 한 인덱스의 값을
           더해서 /2 로 한다.
    */
  let mergeArr = nums1.concat(nums2);

  let sortedArr = mergeArr.sort((a, b) => {
    if (a - b < 0) {
      return -1;
    } else if (a - b === 0) {
      return 0;
    } else {
      return 1;
    }
  });

  let index = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    let average = (sortedArr[index] + sortedArr[index - 1]) / 2;
    return average;
  } else {
    return sortedArr[index];
  }
};
