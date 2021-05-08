/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 需要用递归解决的问题，都能用栈解决
  const res = []
  const stack = []
  if (root) stack.push(root)

  while (stack.length) {
    const n = stack.pop()
    res.push(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }

  return res
}
// @lc code=end
