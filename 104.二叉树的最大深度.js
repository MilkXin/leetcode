/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  // 递归, 深度优先遍历, 每次递归深度+1, 当节点为叶子节点时, 比较深度
  let res = 0
  const dfs = (root, depth) => {
    if (!root) return
    if (!root.left && !root.right) {
      res = Math.max(res, depth)
    }
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }
  dfs(root, 1)
  return res
}
// @lc code=end
