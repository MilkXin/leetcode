/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 方案一：用集合去重再过滤
  // const nums = [...new Set(nums1)].filter(n => nums2.includes(n))
  // return nums

  // 方案二: 把数组转为字典，以提高查询速度
  const map = new Map()
  nums1.forEach((n) => {
    map.set(n, true)
  })

  const res = []
  nums2.forEach((n) => {
    if (map.get(n)) {
      res.push(n)
      map.delete(n)
    }
  })
  return res
}
// @lc code=end
