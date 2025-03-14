function twoSum(nums, target) {
  const newSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (newSet.has(compliment)) {
      return [nums.indexOf(compliment), i];
    }

    newSet.add(nums[i]);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

module.exports = twoSum;
