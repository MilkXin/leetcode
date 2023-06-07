/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * 快慢指针:
   * 1. 快指针先走 n 步
   * 2. 快慢指针同时走，当快指针走到尾部时，慢指针的下一个节点就是要删除的节点
   * 3. 注意边界条件
   */
  let fast = head
  let slow = head
  while (n--) {
    fast = fast.next
  }
  if (!fast) return head.next
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
}
// @lc code=end
