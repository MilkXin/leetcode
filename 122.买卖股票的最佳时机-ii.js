/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //   let res = 0
  //   let i = 0
  //   while (i < prices.length) {
  //     let j = i
  //     while (prices[j] < prices[j + 1]) {
  //       j++
  //     }
  //     res += prices[j] - prices[i]

  //     while (prices[j] > prices[j + 1]) {
  //       j++
  //     }
  //     i = Math.max(j, i + 1)
  //   }
  //   return res

  // 贪心算法
  let profile = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profile += prices[i] - prices[i - 1]
    }
  }
  return profile
}
// @lc code=end
