/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  /**
   * 单调栈:
   * 1. 从栈底到栈顶的温度依次递减
   * 2. 栈中存放的是索引
   * 3. 遍历数组，如果当前元素大于栈顶元素，说明栈顶元素的下一个比它大的元素就是当前元素
   * 4. 栈顶元素出栈，继续判断当前元素和新的栈顶元素的大小
   * 5. 如果当前元素小于等于栈顶元素，当前元素入栈
   * 6. 重复 3-5
   * 7. 遍历结束，栈中元素还未找到下一个比它大的元素，说明不存在
   * 8. 栈中剩余元素的下一个比它大的元素不存在，置为 0
   * 9. 返回结果
   */

  const stack = []
  const res = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const top = stack.pop()
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
}
// @lc code=end
