/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  /**
   * 解题思路：
   * 1. 递归
   * 2. 迭代
   * 3. 双指针
   * 4. 哈希表
   * 5. 原地修改
   */

  // 递归
  // if (!head || !head.next) return head
  // if (head.val !== head.next.val) {
  //     head.next = deleteDuplicates(head.next)
  // } else {
  //     let move = head.next
  //     while (move && head.val === move.val) {
  //         move = move.next
  //     }
  //     return deleteDuplicates(move)
  // }
  // return head

  // 迭代
  // let dummy = new ListNode(0, head)
  // let prev = dummy
  // while (head && head.next) {
  //     if (head.val === head.next.val) {
  //         while (head.next && head.val === head.next.val) {
  //             head = head.next
  //         }
  //         prev.next = head.next
  //     } else {
  //         prev = prev.next
  //     }
  //     head = head.next
  // }
  // return dummy.next

  // 双指针
  // let dummy = new ListNode(0, head)
  // let slow = dummy
  // let fast = head
  // while (fast && fast.next) {
  //     if (fast.val === fast.next.val) {
  //         while (fast.next && fast.val === fast.next.val) {
  //             fast = fast.next
  //         }
  //         slow.next = fast.next
  //     } else {
  //         slow = slow.next
  //     }
  //     fast = fast.next
  // }
  // return dummy.next

  // 哈希表
  // let dummy = new ListNode(0, head)
  // let map = new Map()
  // while (head) {
  //     map.set(head.val, (map.get(head.val) || 0) + 1)
  //     head = head.next
  // }
  // head = dummy
  // while (head && head.next) {
  //     if (map.get(head.next.val) > 1) {
  //         head.next = head.next.next
  //     } else {
  //         head = head.next
  //     }
  // }
  // return dummy.next

  // 原地修改
  if (!head || !head.next) {
    return head
  }

  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
// @lc code=end
