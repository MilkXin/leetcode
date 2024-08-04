/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 贪心算法
  const fun = (a, b) => {
    return a - b
  }
  g.sort(fun)
  s.sort(fun)
  let i = 0
  s.forEach((n) => {
    if (n >= g[i]) {
      i++
    }
  })
  return i
}
// @lc code=end
