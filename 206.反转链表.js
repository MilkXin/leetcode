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
    // 双指针
    let p1 = head
    let p2 = null
    while (p1) {
        const temp = p1.next
        p1.next = p2
        p2 = p1
        p1 = temp
    }
    return p2
};
// @lc code=end

