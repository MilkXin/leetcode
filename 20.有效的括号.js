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
  // 方案一：遇到左括号入栈，遇到右括号且与栈顶括号匹配则出栈，最后栈空了则合法，否则不合法
  // if (s.length % 2 === 1) return false
  // const stack = []
  // for (let i = 0; i < s.length; i++) {
  //   const c = s[i]
  //   if (c === '{' || c === '[' || c === '(') {
  //     stack.push(c)
  //   } else {
  //     const t = stack[stack.length - 1]
  //     if (
  //       (t === '{' && c === '}') ||
  //       (t === '[' && c === ']') ||
  //       (t === '(' && c === ')')
  //     ) {
  //       stack.pop()
  //     } else {
  //       return false
  //     }
  //   }
  // }
  // return stack.length === 0

  // 方案二：用map优化
  if (s.length % 2 === 1) return false
  const stack = []
  const map = new Map()
  map.set('{', '}')
  map.set('[', ']')
  map.set('(', ')')
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end
