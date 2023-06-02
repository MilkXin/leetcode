/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   * 解题思路：
   * 1. 从后往前遍历，比较两个数组的最后一位，将较大的放在nums1的最后一位
   * 2. 重复上述步骤，直到遍历完nums1或nums2
   * 3. 将nums2剩余的元素放在nums1的前面
   */
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
}
// @lc code=end
