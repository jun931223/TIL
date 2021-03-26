let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

//72 ms, 38.7 MB

let twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let checker = nums.indexOf(target - nums[i]);
    if (checker !== -1 && checker !== i) {
      return [i, checker];
    }
  }
};
// 	76 ms, 	38.6 MB
