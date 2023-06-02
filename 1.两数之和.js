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
  // 1. 暴力法
  /**
   * 1. 遍历数组，将每个元素的值和它后面的元素的值相加，判断是否等于 target
   * 2. 如果等于 target，则返回两个元素的索引
   * 3. 如果不等于 target，则继续遍历
   */
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i+1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j]
  //         }
  //     }
  // }

  // 2. 哈希表
  /**
   * 1. 创建一个哈希表，用于存储每个元素的值和它的索引
   * 2. 遍历数组，判断哈希表中是否存在 target - nums[i] 的值
   * 3. 如果存在，则返回 target - nums[i] 的索引和当前索引
   * 4. 如果不存在，则将当前元素的值和索引存入哈希表中
   */
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i]
    if (map.has(temp)) {
      return [map.get(temp), i]
    } else {
      map.set(nums[i], i)
    }
  }
}
// @lc code=end
