/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 排序后，第k个最大元素就是倒数第k个元素
  // return nums.sort((a, b) => b - a)[k - 1]

  class MinHeap {
    constructor() {
      // 初始化一个空数组来存储堆元素
      this.heap = []
    }

    // 获取父节点的索引
    getParentIndex(index) {
      return Math.floor((index - 1) / 2)
    }

    // 获取左子节点的索引
    getLeftChildIndex(index) {
      return 2 * index + 1
    }

    // 获取右子节点的索引
    getRightChildIndex(index) {
      return 2 * index + 2
    }

    // 交换两个节点的位置
    swap(index1, index2) {
      ;[this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    // 插入一个新的值
    insert(value) {
      this.heap.push(value) // 将新值添加到数组末尾
      this.heapifyUp() // 调整堆结构
    }

    // 向上调整堆结构以维持最小堆性质
    heapifyUp() {
      let index = this.heap.length - 1
      while (index > 0) {
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index)
          index = parentIndex
        } else {
          break
        }
      }
    }

    // 提取堆中的最小值
    extractMin() {
      if (this.heap.length === 0) {
        return null // 堆为空，返回null
      }
      if (this.heap.length === 1) {
        return this.heap.pop() // 只有一个元素，直接弹出
      }
      const min = this.heap[0] // 堆顶元素是最小值
      this.heap[0] = this.heap.pop() // 用最后一个元素替换堆顶
      this.heapifyDown(0) // 向下调整堆结构
      return min
    }

    // 向下调整堆结构以维持最小堆性质
    heapifyDown(index) {
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallest = this.getLeftChildIndex(index)
        const rightChildIndex = this.getRightChildIndex(index)
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
          smallest = rightChildIndex
        }
        if (this.heap[index] <= this.heap[smallest]) {
          break // 如果当前节点小于等于最小的子节点，则停止调整
        }
        this.swap(index, smallest) // 否则交换位置并继续向下调整
        index = smallest
      }
    }

    // 查看堆顶元素（最小值）但不移除
    peek() {
      return this.heap.length > 0 ? this.heap[0] : null
    }

    // 获取堆的大小
    size() {
      return this.heap.length
    }
  }

  const h = new MinHeap()
  nums.forEach((n) => {
    h.insert(n)
    if (h.size() > k) {
      h.extractMin()
    }
  })
  return h.peek()
}
// @lc code=end
