/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  /**
   * 一、标记法:
   * 1. 遍历链表，每次遍历到一个节点，就给它打上标记
   * 2. 如果遍历到的节点已经被打上标记，说明链表中有环
   * 3. 如果遍历到的节点没有被打上标记，说明链表中没有环
   * 4. 返回结果
   *
   * 二、快慢指针:
   * 1. 快指针每次走两步，慢指针每次走一步
   * 2. 如果链表中有环，那么快指针一定会追上慢指针
   * 3. 如果链表中没有环，那么快指针会走到链表的尾部
   * 4. 返回结果
   */

  // 一、标记法
  // let cur = head;
  // while (cur) {
  //     if (cur.flag) return true;
  //     cur.flag = true;
  //     cur = cur.next;
  // }
  // return false;

  // 二、快慢指针
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) return true
  }
  return false
}
// @lc code=end
