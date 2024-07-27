/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 广度优先遍历，使用队列记录节点和层级，每次取出队列中的节点，将节点值加入到对应层级中
  if (!root) return []
  const res = []
  const q = [[root, 0]]
  while (q.length) {
    const [n, level] = q.shift()
    if (res[level]) {
      res[level].push(n.val)
    } else {
      res[level] = [n.val]
    }
    if (n.left) q.push([n.left, level + 1])
    if (n.right) q.push([n.right, level + 1])
  }
  return res
}
// @lc code=end
