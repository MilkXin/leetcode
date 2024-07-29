/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  // 深度优先遍历，递归
  // 用一个map记录已经遍历过的节点
  // 如果已经遍历过，就返回map中的节点
  // 如果没有遍历过，就创建一个新的节点，然后遍历它的邻居节点
  // 如果邻居节点已经遍历过，就把map中的节点添加到新的节点的邻居节点中
  // 如果邻居节点还没有遍历过，就递归调用dfs函数，然后把新的节点添加到map中
  // 最后返回新的节点
  if (!node) return
  const map = new Map()
  const dfs = (node) => {
    if (map.has(node)) return map.get(node)
    const clone = new _Node(node.val)
    map.set(node, clone)
    for (const n of node.neighbors) {
      clone.neighbors.push(dfs(n))
    }
    return clone
  }
  return dfs(node)
}
// @lc code=end
