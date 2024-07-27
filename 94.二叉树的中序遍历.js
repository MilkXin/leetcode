/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  // 递归，中序遍历
  //   const res = []
  //   const recursion = (root) => {
  //     if (!root) return
  //     recursion(root.left)
  //     res.push(root.val)
  //     recursion(root.right)
  //   }
  //   recursion(root)
  //   return res

  // 迭代，中序遍历
  const res = []
  const stack = []
  let p = root
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }
  return res
}
// @lc code=end
