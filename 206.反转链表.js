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
   * 双指针:
   * 1. 定义两个指针, p1 和 p2
   * 2. 遍历链表, 将 p1 的 next 指向 p2, 然后将 p1 和 p2 向后移动一位
   * 3. 当 p1 为 null 时, 返回 p2
   * 4. 时间复杂度: O(n)
   * 5. 空间复杂度: O(1)
   */
  let p1 = head
  let p2 = null
  while (p1) {
    let next = p1.next
    p1.next = p2
    p2 = p1
    p1 = next
  }
  return p2
}
// @lc code=end
