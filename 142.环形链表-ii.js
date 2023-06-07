/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  /**
   * 一、快慢指针:
   * 1. 快指针每次走两步，慢指针每次走一步
   * 2. 如果链表中有环，那么快指针一定会追上慢指针
   * 3. 如果链表中没有环，那么快指针会走到链表的尾部
   * 4. 如果链表中有环，那么快指针追上慢指针时，慢指针走过的距离是环的长度的整数倍
   * 5. 让快指针回到链表头部，快指针和慢指针每次都走一步，当它们相遇时，相遇的节点就是环的入口
   * 6. 返回结果
   *
   * 二、标记法:
   * 1. 遍历链表，每次遍历到一个节点，就给它打上标记
   * 2. 如果遍历到的节点已经被打上标记，说明链表中有环
   * 3. 如果遍历到的节点没有被打上标记，说明链表中没有环
   * 4. 返回结果
   */

  // 一、快慢指针
  //   let fast = head
  //   let slow = head
  //   while (fast && fast.next) {
  //     fast = fast.next.next
  //     slow = slow.next

  //     if (fast === slow) {
  //       let ptr = head
  //       while (ptr !== slow) {
  //         ptr = ptr.next
  //         slow = slow.next
  //       }
  //       return ptr
  //     }
  //   }
  //   return null

  // 二、标记法
  let cur = head
  while (cur) {
    if (cur.flag) return cur
    cur.flag = true
    cur = cur.next
  }
  return null
}
// @lc code=end
