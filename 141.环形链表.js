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
// var hasCycle = function (head) {
//     // 双指针，一快一慢，若有环则两指针会相遇
//     let p1 = head
//     let p2 = head

//     while (p1 && p2 && p2.next) {
//         p1 = p1.next
//         p2 = p2.next.next
//         if (p1 === p2) {
//             return true
//         }
//     }
//     return false
// };

var hasCycle = function (head) {
    if (!head) return false

    let pre = head, next = head.next
    while (pre !== next && next && next.next) {
        pre = pre.next
        next = next.next.next
    }
    return pre === next
};
// @lc code=end

