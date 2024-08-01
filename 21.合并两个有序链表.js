/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /**
   * 一、递归:
   * 1. 如果 list1 的 val 小于 list2 的 val，那么 list1 的 next 指向 list1.next 和 list2 的合并结果
   * 2. 如果 list1 的 val 大于等于 list2 的 val，那么 list2 的 next 指向 list1 和 list2.next 的合并结果
   * 3. 返回结果
   *
   * 二、迭代:
   * 1. 新建一个链表，用于存储合并后的结果
   * 2. 遍历 list1 和 list2，比较两个链表的值，将较小的值放入新链表中
   * 3. 返回结果
   */
  // 一、递归
  // if (!list1) return list2;
  // if (!list2) return list1;
  // if (list1.val < list2.val) {
  //     list1.next = mergeTwoLists(list1.next, list2);
  //     return list1;
  // } else {
  //     list2.next = mergeTwoLists(list1, list2.next);
  //     return list2;
  // }
  // 二、迭代
  // let preHead = new ListNode(-1)
  // let prev = preHead
  // while (list1 && list2) {
  //   if (list1.val < list2.val) {
  //     prev.next = list1
  //     list1 = list1.next
  //   } else {
  //     prev.next = list2
  //     list2 = list2.next
  //   }
  //   prev = prev.next
  // }
  // prev.next = list1 ? list1 : list2
  // return preHead.next
  const res = new ListNode(0)
  let p = res
  let p1 = list1
  let p2 = list2
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  if (p1) {
    p.next = p1
  }
  if (p2) {
    p.next = p2
  }
  return res.next
}
// @lc code=end
