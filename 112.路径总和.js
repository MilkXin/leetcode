/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 深度优先遍历，递归，记录当前路径的和
  if (!root) return false
  let res = false
  const dfs = (n, s) => {
    if (!n.left && !n.right && s === targetSum) {
      res = true
    }
    if (n.left) dfs(n.left, s + n.left.val)
    if (n.right) dfs(n.right, s + n.right.val)
  }
  dfs(root, root.val)
  return res
}
// @lc code=end
