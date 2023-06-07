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
   * 1. 队列中存放的是索引
   * 2. 队列中的元素从队头到队尾依次递减
   * 3. 遍历数组，如果当前元素大于队尾元素，说明队尾元素的下一个比它大的元素就是当前元素
   * 4. 队尾元素出队，继续判断当前元素和新的队尾元素的大小
   * 5. 如果当前元素小于等于队尾元素，当前元素入队
   * 6. 重复 3-5
   * 7. 遍历结束，队列中元素还未找到下一个比它大的元素，说明不存在
   * 8. 队列中剩余元素的下一个比它大的元素不存在，置为 0
   * 9. 返回结果
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

  // 二、单调队列
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
