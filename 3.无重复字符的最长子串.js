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
  /**
   * 双指针法:
   * 1. 用一个set来存储不重复的字符
   * 2. 用两个指针i和j来标记不重复的字符的起始位置和结束位置
   * 3. 如果set中没有s[j]，则将s[j]添加到set中，j++
   * 4. 如果set中有s[j]，则将s[i]从set中删除，i++
   * 5. 用max来记录最长的不重复子串的长度
   * 6. 用while循环来遍历字符串
   * 7. 返回max
   */
  // let i = 0,
  //   j = 0,
  //   max = 0
  // const set = new Set()
  // while (i < s.length && j < s.length) {
  //   if (!set.has(s[j])) {
  //     set.add(s[j++])
  //     max = Math.max(max, j - i)
  //   } else {
  //     set.delete(s[i++])
  //   }
  // }
  // return max

  // 使用Map改写
  let i = 0
  let res = 0
  const map = new Map()
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1
    }
    res = Math.max(res, j - i + 1)
    map.set(s[j], j)
  }
  return res
}

// @lc code=end
