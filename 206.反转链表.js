/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * 多指针:
   * 1. 三个指针，分别指向当前节点，前一个节点，后一个节点
   * 2. 当前节点的 next 指向前一个节点
   * 3. 前一个节点指向当前节点
   * 4. 当前节点指向后一个节点
   * 5. 重复 2-4 步骤，直到当前节点为 null
   * 6. 返回前一个节点
   */
  let pre = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
// @lc code=end
