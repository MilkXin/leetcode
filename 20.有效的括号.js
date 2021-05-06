/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 分析，遇到左括号入栈，遇到右括号且与栈顶括号匹配则出栈，最后栈空了则合法，否则不合法
    if (s.length % 2 === 1) return false
    const stack = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const lefts = Object.keys(map)
    const rights = Object.values(map)

    for (const item of s) {
        if (lefts.includes(item)) {
            stack.push(item)
        }
        if (rights.includes(item)) {
            if (map[stack[stack.length - 1]] === item) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return !stack.length
};
// @lc code=end

