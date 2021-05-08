/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i]
    if (map.has(n)) {
      return [map.get(n), i]
    }
    map.set(nums[i], i)
  }
}
// @lc code=end
