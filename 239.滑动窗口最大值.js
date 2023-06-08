/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  /**
   * 一、暴力法：
   * 1. 遍历数组，每次取出 k 个元素，找出其中的最大值
   * 2. 重复 1，直到遍历结束
   * 3. 返回结果
   *
   * 二、双端队列：
   * 1. 维护一个单调递减队列
   * 2. 检查队尾元素，看是不是都满足大于等于当前元素的条件。如果是的话，直接将当前元素入队。否则，将队尾元素逐个出队、直到队尾元素大于等于当前元素为止
   * 3. 将当前元素入队
   * 4. 检查队头元素，看队头元素是否已经被排除在滑动窗口的范围之外了。如果是，则将队头元素出队
   * 5. 看当前遍历过的元素个数是否小于 k。如果元素个数小于k，这意味着第一个滑动窗口内的元素都还没遍历完、第一个最大值还没出现，此时我们还不能动结果数组，只能继续更新队列
   * 6. 如果元素个数大于等于k，这意味着滑动窗口的最大值已经出现了，此时每遍历到一个新元素都要及时地往结果数组里添加当前滑动窗口对应的最大值（最大值就是此时此刻双端队列的队头元素）
   */

  // 一、暴力法
  // const res = []
  // for (let i = 0; i < nums.length - k + 1; i++) {
  //   let max = nums[i]
  //   for (let j = i + 1; j < i + k; j++) {
  //     max = Math.max(max, nums[j])
  //   }
  //   res.push(max)
  // }
  // return res

  // 二、双端队列
  const queue = []
  const res = []
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    queue.push(i)
    if (queue[0] <= i - k) {
      queue.shift()
    }
    if (i >= k - 1) {
      res.push(nums[queue[0]])
    }
  }
  return res
}
// @lc code=end
