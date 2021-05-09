/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 用双指针维护一个滑动窗口，用来剪切字串
    let l = 0 // 左指针
    let res = 0 // 记录字串长度
    let map = new Map() // map记录字串字符的下标

    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            // 遇到重复字符且重复字符位于窗口内，则左指针移动到相同字符的下一位
            l = map.get(s[r]) + 1
        }
        map.set(s[r], r)
        res = Math.max(res, r - l + 1)
    }
    return res
};
// @lc code=end

