/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 解题思路：迭代
  // 1. 找到 left 的前一个节点 prev
  // 2. 从 prev 开始迭代，将节点依次插入到 prev 后面
  // 3. 返回 head

  let preHead = new ListNode(-1)
  preHead.next = head
  let prev = preHead
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next
  }
  let cur = prev.next
  for (let i = 0; i < right - left; i++) {
    let next = cur.next
    cur.next = next.next
    next.next = prev.next
    prev.next = next
  }
  return preHead.next
}
// @lc code=end
