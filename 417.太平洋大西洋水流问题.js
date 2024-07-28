/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // 从边界开始，深度优先遍历，记录可以到达的点
  // 从太平洋开始，深度优先遍历，记录可以到达的点
  // 从大西洋开始，深度优先遍历，记录可以到达的点
  // 两个集合的交集就是答案
  const m = heights.length
  const n = heights[0].length
  const pacific = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const dfs = (i, j, ocean) => {
    if (ocean[i][j]) return
    ocean[i][j] = true
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]
    for (const [dx, dy] of dirs) {
      const x = i + dx
      const y = j + dy
      if (x < 0 || x >= m || y < 0 || y >= n || heights[x][y] < heights[i][j]) continue
      dfs(x, y, ocean)
    }
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific)
    dfs(i, n - 1, atlantic)
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific)
    dfs(m - 1, j, atlantic)
  }
  const res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j])
      }
    }
  }
  return res
}
// @lc code=end
