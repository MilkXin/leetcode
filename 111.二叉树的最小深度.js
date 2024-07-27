/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  // 广度优先遍历, 遇到第一个叶子节点, 返回深度, 如果没有叶子节点, 返回0
  if (!root) return 0
  const q = [[root, 1]]
  while (q.length) {
    const [n, l] = q.shift()
    if (!n.left && !n.right) {
      return l
    }
    if (n.left) q.push([n.left, l + 1])
    if (n.right) q.push([n.right, l + 1])
  }
}
// @lc code=end
