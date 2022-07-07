/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return head

    const arr = []
    let p = head
    while (p) {
        const temp = p.next
        p.next = null
        arr.push(p)
        p = temp
    }

    let i = 0
    let j = arr.length - 1
    let p1 = new ListNode()
    const res = p1
    while (i < j) {
        p1.next = arr[i]
        p1.next.next = arr[j]
        p1 = p1.next.next
        i++
        j--
    }

    if (i === j) {
        p1.next = arr[i]
    }

    return res.next
};
// @lc code=end

