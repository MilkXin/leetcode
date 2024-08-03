/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 动态规划
  //   const dp = [1, 2]
  //   if (n <= 2) return dp[n - 1]
  //   for (let i = 2; i < n; i++) {
  //     dp[i] = dp[i - 1] + dp[i - 2]
  //   }
  //   return dp[n - 1]

  // 动态规划，降低空间复杂度
  if (n < 2) return 1
  let dp0 = 1
  let dp1 = 1
  for (let i = 2; i <= n; i++) {
    const temp = dp0
    dp0 = dp1
    dp1 = dp1 + temp
  }
  return dp1
}
// @lc code=end
