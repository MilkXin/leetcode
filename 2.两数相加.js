/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  /**
   * 1. 两个链表的长度可能不一样，所以需要遍历两个链表
   * 2. 链表的值可能超过10，所以需要进位
   * 3. 链表的最后一位可能需要进位，所以需要判断最后一位是否需要进位
   */
  const l3 = new ListNode(0)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)
    p3.next = new ListNode(sum % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  if (carry) {
    p3.next = new ListNode(carry)
  }
  return l3.next
}
// @lc code=end
