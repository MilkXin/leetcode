/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * 解题思路：
   * 1. 先排序
   * 2. 从左到右遍历，每次遍历的值为a，那么问题就转化为在a右边的数组中找到两个数，使得三者之和为0
   * 3. 用双指针法，一个指针指向a的右边，一个指针指向数组末尾，如果三者之和大于0，右指针左移，如果小于0，左指针右移
   * 4. 注意去重
   */
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1,
      right = nums.length - 1

    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}
// @lc code=end
